const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection'); // Importa la instancia de Sequelize

const Empresa = sequelize.define('empresas', {
    id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_empresa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true
    },
    nit: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    }
}, {
    timestamps: false 
});

module.exports = Empresa;
