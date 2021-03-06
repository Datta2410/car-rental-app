const express = require('express');
const router = express.Router();
const carController = require('../controllers/car')
router.post('/createCar', carController.createCar)
router.get('/getallCars', carController.getallCars)
router.get('/getAvailCars', carController.getAvailCars)
router.post('/updateAvail', carController.updateAvail)
module.exports = router;