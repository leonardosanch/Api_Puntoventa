const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection'); // Importa la instancia de Sequelize

const Empresa = require('./Empresa'); 

const PuntoVenta = sequelize.define('puntos_venta', {
    id_punto_venta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    
    nombre_punto_venta: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Empresa,
            key: 'id'
        }
    }
}, {
    tableName: 'puntos_venta', // Nombre correcto de la tabla en la base de datos
    timestamps: false 
});

module.exports = PuntoVenta;
