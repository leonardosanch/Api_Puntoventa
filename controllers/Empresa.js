const Empresa = require('../models/Empresa');

exports.crearEmpresa = async (req, res) => {
  try {
    const { nombre_empresa, nit } = req.body;

    // Verificar si la empresa ya existe por su NIT
    const existeEmpresa = await Empresa.findOne({ where: { nit } });
    if (existeEmpresa) {
      return res.status(400).json({ mensaje: 'La empresa ya existe' });
    }

    // Crear una nueva empresa
    const nuevaEmpresa = await Empresa.create({ nombre_empresa, nit });

    return res.status(201).json({ mensaje: 'Empresa creada correctamente', empresa: nuevaEmpresa });
  } catch (error) {
    console.error('Error al crear empresa:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
