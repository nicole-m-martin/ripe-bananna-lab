const { DataTypes, Model, STRING } = require('sequelize');
const db = require('../utils/database');

class Review extends Model {}

Review.init(
  {
    rating: {
      type: DataTypes.INTEGER,
      validate: { len: [1, 5] },
      allowNull: false,
    },
    // reviewer: {
    //     type: DataTypes.BIGINT,
    //     allowNull: false
    // },
    review: {
      type: DataTypes.STRING(140),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    timestamps: false,
    tableName: 'reviews',
  }
);

module.exports = Review;
