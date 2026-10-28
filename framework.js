const Application = require('./framework/Application.js')
const userRouter = require('./src/routers/user-router.js')
const jsonParser = require('./framework/middleware/paresJson.js')
const parsedUrl = require('./framework/middleware/parseUrl.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

const app = new Application() // Иницилизация сервера

// Миделварины
app.use(jsonParser)
app.use(parsedUrl('http://localhost:5000'))

app.addRouter(userRouter) // Роутеры


const start = async() => {
    try {
        if (!MONGODB_URI) {
            throw new Error('MONGODB_URI is not set in the .env file')
        }

        await mongoose.connect("mongodb://root:example@127.0.0.1:27017")
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Запуск сервера
    } catch (e) {
        console.error('Failed to connect to MongoDB:', e.message)
    }
}

start()