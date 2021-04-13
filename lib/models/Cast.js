const { DataTypes, Model } = require('sequelize');
const db = require('../utils/database');

class Cast extends Model {}

Cast.init(
  {
    role: {
      type: DataTypes.STRING,
    }
  },
  { 
    sequelize: db, 
    timestamps: false,
    tableName: 'casts'
  }
);

module.exports = Cast;