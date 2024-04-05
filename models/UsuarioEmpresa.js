const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection'); 
const Usuario = require('./Usuario'); 
const Empresa = require('./Empresa'); 
const Rol = require('./Rol'); 

const UsuarioEmpresa = sequelize.define('usuario_empresa', {
    id_usuario_empresa: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Empresa,
            key: 'id'
        }
    },
    id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Rol,
            key: 'id'
        }
    }
}, {
    tableName: 'usuario_empresa', 
    timestamps: false 
});

module.exports = UsuarioEmpresa;
