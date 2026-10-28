// Структура endpoints для роутера
// endpoints = {
//     '/users': {
//         'GET': handlerFunction1,
//         'POST': handlerFunction2,
//         'DELETE': handlerFunction3
//     }


module.exports = class Router {
    constructor() {
        this.endpoints = {};
    }

    // Инициализация Роутера просто по маске делаем события
    request(method, path, handler) {
        if(!this.endpoints[path]) {
            this.endpoints[path] = {};
        }
        const endpoint = this.endpoints[path];

        if(endpoint[method]) {
            throw new Error(`Endpoint ${method} ${path} already exists`);
        }

        endpoint[method] = handler;
    }

    // Декомпозиция для расширения
    get(path, handler) {
        this.request('GET', path, handler);
    }

    post(path, handler) {
        this.request('POST', path, handler);
    }

    delete(path, handler) {
        this.request('DELETE', path, handler);
    }

    put(path, handler) {
        this.request('PUT', path, handler);
    }
    
}