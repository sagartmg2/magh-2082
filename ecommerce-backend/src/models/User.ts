/* 


const { Sequelize, DataTypes } = require('sequelize');
con = new Sequelize('sqlite::memory:');st sequelize /// import this from server.js


const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  },
);

// `sequelize.define` also returns the model
conso

*/


// TODO: eXPORT User