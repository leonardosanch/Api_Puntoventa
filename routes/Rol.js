const express = require('express');
const router = express.Router();
const RolController = require('../controllers/Rol');

router.post('/', RolController.crearRol);

module.exports = router;
