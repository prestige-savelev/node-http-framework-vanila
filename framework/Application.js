const http = require('http');
const Emitter = require('events');

module.exports = class Application {
    constructor() {
        this.emiter = new Emitter();
        this.server = this._createServer();
        this.middlewares = []
    }

    // Для прокрутки мидлеварин
    use(middlewares) {
        this.middlewares.push(middlewares)
    }

    // Делигирование старта сервера
    listen(port, callback) {
        this.server.listen(port, callback)
    }

    // Добавление роутеров
    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method];
                this.emiter.on(this._getMask(path, method), (req, res) => {
                    handler(req, res)
                });
            });
        });
    }

    // Создание сервера
    _createServer() {
        return http.createServer((req, res) => {
            let body = '' // Читаем стрим с req
            req.on('data', (chank) => {
                body += chank
            })
            req.on('end', () => {
                if(body) {
                    req.body = JSON.parse(body)
                }
                // Все мидлеварины исполняем перед исполнением
                this.middlewares.forEach(middleware => middleware(req, res)) 
                // Эмитим события для обработки
                const emitted = this.emiter.emit(this._getMask(req.pathname, req.method), req, res);
                // Неверные роутеры 404
                if  (!emitted) {
                    res.statusCode = 404;
                    res.end('Not Found');
                }
            })
            
        });
    }

    // Маска для событий чтобы не путаться
    _getMask(path, method) {
        return `[${path}]:[${method}]`;
    }

    
}