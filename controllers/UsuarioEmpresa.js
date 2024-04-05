const UsuarioEmpresa = require('../models/UsuarioEmpresa');
const Usuario = require('../models/Usuario');
const Empresa = require('../models/Empresa');
const Rol = require('../models/Rol');

exports.crearUsuarioEmpresa = async (req, res) => {
  try {
    const { id_usuario, id_empresa, id_rol } = req.body;

    // Verificar si el usuario existe
    const usuarioExistente = await Usuario.findByPk(id_usuario);
    if (!usuarioExistente) {
      return res.status(400).json({ mensaje: 'El usuario no existe' });
    }

    // Verificar si la empresa existe
    const empresaExistente = await Empresa.findByPk(id_empresa);
    if (!empresaExistente) {
      return res.status(400).json({ mensaje: 'La empresa no existe' });
    }

    // Verificar si el rol existe
    const rolExistente = await Rol.findByPk(id_rol);
    if (!rolExistente) {
      return res.status(400).json({ mensaje: 'El rol no existe' });
    }

    // Crear la relación entre usuario, empresa y rol
    const nuevaRelacion = await UsuarioEmpresa.create({ id_usuario, id_empresa, id_rol });

    return res.status(201).json({ mensaje: 'Relación creada correctamente', relacion: nuevaRelacion });
  } catch (error) {
    console.error('Error al crear relación usuario-empresa-rol:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
