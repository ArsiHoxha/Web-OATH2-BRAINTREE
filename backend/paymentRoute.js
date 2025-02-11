const express = require('express');
const { generateToken, processPayment } = require('./paymentController');
const router = express.Router()

router.get('/generate/token',generateToken)
router.post('/process/payment',processPayment)


module.exports = router;