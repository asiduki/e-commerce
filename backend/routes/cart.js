const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const Item = require('../models/Items');
const router = express.Router();

// Get Cart
router.get('/', auth, async (req, res) => {
    const user = await User.findById(req.user.id).populate('cart.itemId');
    res.json(user.cart);
});

// Add to Cart
router.post('/add', auth, async (req, res) => {
    const { itemId } = req.body;
    const user = await User.findById(req.user.id);
    const existing = user.cart.find(i => i.itemId.toString() === itemId);
    if (existing) {
        existing.quantity += 1;
    } else {
        user.cart.push({ itemId, quantity: 1 });
    }
    await user.save();
    res.json(user.cart);
});

// Remove from Cart
router.post('/remove', auth, async (req, res) => {
    const { itemId } = req.body;
    const user = await User.findById(req.user.id);
    user.cart = user.cart.filter(i => i.itemId.toString() !== itemId);
    await user.save();
    res.json(user.cart);
});

module.exports = router;
