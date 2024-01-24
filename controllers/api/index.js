const router=require("express").Router()
const userRoutes=require("./userRoutes.js")
const categoryRoutes=require("./categoryRoutes.js")
const productRoutes=require("./productRoutes.js")
router.use("/users",userRoutes)
router.use("/categories",categoryRoutes)
router.use("/products",productRoutes)
//routes go here
const express = require('express');
const sequelize = require('./db/connection');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json())

sequelize.sync({ force: false }).then(() => {
    console.log('Connected to the database');
});

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports=router