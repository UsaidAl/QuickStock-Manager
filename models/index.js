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
    User,
    Product,
    Category,
};
