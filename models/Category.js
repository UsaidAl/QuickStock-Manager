// models/Category.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Category extends Model {}

Category.init(
  {
    // Define model attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Define model options
    sequelize,
    timestamps: false, // Disable timestamps (createdAt and updatedAt columns)
    freezeTableName: true, // Prevent Sequelize from pluralizing table names
    underscored: true, // Use underscores instead of camelCase for automatically added attributes
    modelName: 'category', // Set the table name explicitly
  }
);

module.exports = Category;
