const { Router } = require('express');
const authController = require('../controllers/authControllers.js')
const router = Router();

router.get('/api/signup', authController.signup_get)
router.post('/api/signup', authController.signup_post)
router.get('/api/login', authController.login_get)
router.post('/api/login', authController.login_post)
router.get('/api/logout', authController.logout_get)

module.exports = router