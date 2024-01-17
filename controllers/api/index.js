const router=require("express").Router()
const userRoutes=require("./userRoutes.js")
router.use("/",userRoutes)
//routes go here

module.exports=router