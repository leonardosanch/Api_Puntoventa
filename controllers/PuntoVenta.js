const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection');
const Empresa = require('../models/Empresa');
const PuntoVenta = require('../models/PuntoVenta');



exports.crearPuntoVenta = async (req, res) => {
  try {
    const { nombre_punto_venta, direccion, id_empresa } = req.body;

    // Verificar si la empresa existe
    const empresaExistente = await Empresa.findByPk(id_empresa);
    if (!empresaExistente) {
      return res.status(400).json({ mensaje: 'La empresa no existe' });
    }

    // Crear el punto de venta asociado a la empresa existente
    const nuevoPuntoVenta = await PuntoVenta.create({ nombre_punto_venta, direccion, id_empresa });

    return res.status(201).json({ mensaje: 'Punto de venta creado correctamente', punto_venta: nuevoPuntoVenta });
  } catch (error) {
    console.error('Error al crear punto de venta:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};
