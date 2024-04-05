
const express = require('express');
const router = express.Router();
const PuntoVentaController = require('../controllers/PuntoVenta');

router.post('/', PuntoVentaController.crearPuntoVenta);

module.exports = router;
