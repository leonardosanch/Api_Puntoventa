const express = require('express');
const router = express.Router();
const UsuarioEmpresaController = require('../controllers/UsuarioEmpresa');

router.post('/', UsuarioEmpresaController.crearUsuarioEmpresa);

module.exports = router;
