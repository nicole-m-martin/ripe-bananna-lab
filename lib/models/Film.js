const { data } = require('browserslist');
const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Film extends Model { }

Film.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // studio:{ //this will be an association
    //   type: DataTypes.BIGINT,
    //   // allowNull: false
    // },
    released: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // cast: [{ //film will get this from actors via associations
    //   role: {
    //     type: DataTypes.STRING
    //   },
    //   actor: {
    //     type: DataTypes.BIGINT,
    //     allowNull: false
    //   }
    // }]
  },
  {
    sequelize: db,
    timestamps: false,
    tableName: 'films'
  }
);

module.exports = Film;