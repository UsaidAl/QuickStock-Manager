const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config.js");

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.sequelize = sequelize;




const User = require('./Users');
const Product = require('./Product');
const Category = require('./Category');

Product.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

User.hasMany(Product, {
    foreignKey: 'user_id',
});

Category.hasMany(Product, {
    foreignKey: 'category_id',
});

module.exports = {
    db,
    sequelize
  };