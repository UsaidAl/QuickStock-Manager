const router = require('express').Router();
const express = require('express');
const { Product, Category, User } = require('../../models');



// Route to add a new product
router.post('/products', async (req, res) => {
    try {
        const { product_name, price, stock, category_id, user_id } = req.body;

        // Check if the product with the provided name already exists
        const existingProduct = await Product.findOne({
            where: {
                product_name: product_name,
            },
        });

        if (existingProduct) {
            return res.status(400).json({ message: 'Product already exists' });
        }

        // If the product does not exist, create a new product
        const newProduct = await Product.create({
            product_name: product_name,
            price: price,
            stock: stock,
            category_id: category_id,
            user_id: user_id,
        });

        // Respond with the newly created product
        res.status(201).json(newProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
// Route to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({
          include: [
            {
              model: User,
              attributes: ['username'], // Include only the 'username' attribute from the User model
            },
            {
              model: Category,
              attributes: ['name'], // Include only the 'name' attribute from the Category model
            },
          ],
        });
    
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to get a product by ID with username and category name
router.get('/products/:id', async (req, res) => {
    try {
      const productId = req.params.id;
  
      const product = await Product.findByPk(productId, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Category,
            attributes: ['name'],
          },
        ],
      });
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

// Route to edit a product
router.put('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const { product_name, price, stock, category_id, user_id } = req.body;

        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product's fields
        product.product_name = product_name;
        product.price = price;
        product.stock = stock;
        product.category_id = category_id;
        product.user_id = user_id;

        await product.save();

        res.status(200).json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to delete a product
router.delete('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Delete the product
        await product.destroy();
        return res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
