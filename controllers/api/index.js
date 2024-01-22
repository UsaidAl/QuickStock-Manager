const router=require("express").Router()
const userRoutes=require("./userRoutes.js")
const categoryRoutes=require("./categoryRoutes.js")
const productRoutes=require("./productRoutes.js")
router.use("/",userRoutes)
router.use("/",categoryRoutes)
router.use("/",productRoutes)
//routes go here

module.exports=router