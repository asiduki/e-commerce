const express = require('express');
const Item = require('../models/Items');
const auth = require('../middleware/auth');
const router = express.Router();

// Create Item
router.post('/', auth, async (req, res) => {
    const { name, price, category } = req.body;
    const item = new Item({ name, price, category });
    await item.save();
    res.json(item);
});

// Get Items with filters
router.get('/', async (req, res) => {
    const { minPrice, maxPrice, category } = req.query;
    let filter = {};
    if (minPrice) filter.price = { $gte: Number(minPrice) };
    if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
    if (category) filter.category = category;
    const items = await Item.find(filter);
    res.json(items);
});

// Update Item
router.put('/:id', auth, async (req, res) => {
    const { name, price, category } = req.body;
    const item = await Item.findByIdAndUpdate(req.params.id, { name, price, category }, { new: true });
    res.json(item);
});

// Delete Item
router.delete('/:id', auth, async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
});

module.exports = router;
