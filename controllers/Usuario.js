const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
  try {
    const { nombres, apellidos, correo,telefono } = req.body;

    const existeUsuario = await Usuario.findOne({ where: { correo } });
    if (existeUsuario) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    const nuevoUsuario = await Usuario.create({ nombres, apellidos, correo,telefono });

    return res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
