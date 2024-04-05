const express = require('express');
const router = express.Router();
const EmpresaController = require('../controllers/Empresa');

router.post('/', EmpresaController.crearEmpresa);

module.exports = router;
