const User=require("./Users")
const Product=require("./Product")
Product.belongsTo(User,{
    foreignKey:"userId",
    onDelete:"CASCADE"
})
User.hasMany(Product,{
    foreignKey:"userId"
})
module.exports={
    User,Product
}