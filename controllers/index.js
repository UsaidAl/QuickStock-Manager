const router = require('express').Router();

const apiRoutes = require('./api/');

const homeRoutes = require('./homeRoutes.js');
router.use("/",homeRoutes)
router.use("/api",apiRoutes)

const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;
module.exports=router