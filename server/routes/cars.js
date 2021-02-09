const { Router } = require('express');
const carsController = require('../controllers/carsController.js')
const { requireAuth } = require('../middleware/authMiddleware.js')
const router = Router();

router.get('/api/cars', requireAuth, carsController.cars_get)

module.exports = router