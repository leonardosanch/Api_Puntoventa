const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('puntos_venta', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado correctamente a la base de datos PostgreSQL.');
  } catch (error) {
    console.error('Error al conectar a la base de datos PostgreSQL:', error);
    throw new Error('No se ha podido conectar a la base de datos PostgreSQL.');
  }
};

module.exports = {connection, sequelize};
