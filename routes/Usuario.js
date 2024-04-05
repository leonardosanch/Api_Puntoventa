const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/Usuario');

router.post('/', UsuarioController.crearUsuario);

module.exports = router;
