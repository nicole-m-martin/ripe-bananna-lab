const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Actor extends Model {}

Actor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
    },
    pob: {
      type: DataTypes.STRING,
    },
  },
  { 
    sequelize: db, 
    timestamps: false,
    tableName: 'actors'
  }
);

// sequelize.define('Actor', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   dob: {
//     type: DataTypes.DATE,
//   },
//   pob: {
//     type: DataTypes.STRING,
//   },
// }, {
//   sequelize: db, 
//   timestamps: false,
//   tableName: 'actors'
// });

module.exports = Actor;