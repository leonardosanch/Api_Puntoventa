const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/connection'); // Importa la instancia de Sequelize

const Usuario = sequelize.define('usuarios', {
  id_usuario: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El campo nombres es obligatorio'
      }
    }
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El campo apellidos es obligatorio'
      }
    }
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: {
        msg: 'El campo correo es obligatorio'
      },
      isEmail: {
        msg: 'Debe ingresar un correo electrónico válido'
      }
    }
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'El campo teléfono es obligatorio'
      }
    }
  }
}, {
  timestamps: true // Esto agregará automáticamente las columnas createdAt y updatedAt a tu tabla
});

// Sincroniza el modelo con la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente.');

    await Usuario.sync();
    console.log('Modelo de Usuario sincronizado correctamente con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelo de Usuario:', error);
  }
})();


module.exports = Usuario;
