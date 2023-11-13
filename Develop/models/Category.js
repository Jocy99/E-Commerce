const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// create a new sequelize model for Category
class Category extends Model {}

Category.init(
  {
    // define fields/columns on category model
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allownull: false
    }, 
  },
  {
    // link to db connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
