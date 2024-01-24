const router = require('express').Router();
const express = require('express');
const { Category } = require('../../models'); // Assuming your Category model is in the models directory



// Route to add a new category
router.post('/categories', async (req, res) => {
    try {
        const { name } = req.body;

        // Check if the category with the provided name already exists
        const existingCategory = await Category.findOne({
            where: {
                name: name,
            },
        });

        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        // If the category does not exist, create a new category
        const newCategory = await Category.create({
            name: name,
        });

        // Respond with the newly created category
        res.status(201).json(newCategory);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to get a category by ID
router.get('/categories/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findByPk(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to edit a category
router.put('/categories/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const { name } = req.body;

        const category = await Category.findByPk(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Update the category's name
        category.name = name;
        await category.save();

        res.status(200).json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to delete a category
router.delete('/categories/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findByPk(categoryId);

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Delete the category
        await category.destroy();
        return res.status(200).json({ message: 'Category deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
