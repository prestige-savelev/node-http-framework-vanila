const Router = require('../../framework/Router')
const controller = require('../controllers/user-controller')
const router = new Router();

// Роуты по урлам
router.get('/user', controller.getUsers)
router.post('/user', controller.addUser)

module.exports = router