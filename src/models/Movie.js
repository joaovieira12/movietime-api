const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  watched: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Sincroniza a tabela no banco automaticamente
sequelize.sync({ alter: true })
  .then(() => console.log('Tabela "Movies" sincronizada com sucesso.'))
  .catch((err) => console.error('Erro ao sincronizar tabela:', err));

module.exports = Movie;
