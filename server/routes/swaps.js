const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Swap = require('../models/Swap');

// Create swap request
router.post('/request', auth, async (req, res) => {
  const { toUser, skillOffered, skillRequested, message } = req.body;
  try {
    const swap = new Swap({
      fromUser: req.user.id,
      toUser,
      skillOffered,
      skillRequested,
      message
    });
    await swap.save();
    res.status(201).json(swap);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create swap request' });
  }
});

// Get current user's swap requests (sent or received)
router.get('/mine', auth, async (req, res) => {
  try {
    const swaps = await Swap.find({
      $or: [{ fromUser: req.user.id }, { toUser: req.user.id }]
    }).populate('fromUser toUser', 'name email');
    res.json(swaps);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch swaps' });
  }
});

// Accept swap
router.put('/:id/accept', auth, async (req, res) => {
  try {
    const swap = await Swap.findByIdAndUpdate(req.params.id, { status: 'accepted' }, { new: true });
    res.json(swap);
  } catch (err) {
    res.status(500).json({ message: 'Failed to accept swap' });
  }
});

// Reject swap
router.put('/:id/reject', auth, async (req, res) => {
  try {
    const swap = await Swap.findByIdAndUpdate(req.params.id, { status: 'rejected' }, { new: true });
    res.json(swap);
  } catch (err) {
    res.status(500).json({ message: 'Failed to reject swap' });
  }
});

// Delete swap
router.delete('/:id', auth, async (req, res) => {
  try {
    await Swap.findByIdAndDelete(req.params.id);
    res.json({ message: 'Swap deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete swap' });
  }
});

module.exports = router;
