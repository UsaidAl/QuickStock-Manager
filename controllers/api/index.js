const router=require("express").Router()
const userRoutes=require("./userRoutes.js")
const categoryRoutes=require("./categoryRoutes.js")
const productRoutes=require("./productRoutes.js")
router.use("/users",userRoutes)
router.use("/categories",categoryRoutes)
router.use("/products",productRoutes)
//routes go here

module.exports=router