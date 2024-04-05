const Rol = require('../models/Rol');

exports.crearRol = async (req, res) => {
  try {
    const { nombre_rol } = req.body;

    // Verificar si el rol ya existe por su nombre
    const existeRol = await Rol.findOne({ where: { nombre_rol } });
    if (existeRol) {
      return res.status(400).json({ mensaje: 'El rol ya existe' });
    }

    // Crear un nuevo rol
    const nuevoRol = await Rol.create({ nombre_rol });

    return res.status(201).json({ mensaje: 'Rol creado correctamente', rol: nuevoRol });
  } catch (error) {
    console.error('Error al crear rol:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
