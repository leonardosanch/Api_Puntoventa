const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection'); // Importa la instancia de Sequelize

const Rol = sequelize.define('roles', {

    id_rol: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    nombre_rol: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    }
}, {
    timestamps: false 
});

module.exports = Rol;
