const mongoose = require('mongoose');

const SwapSchema = new mongoose.Schema({
    fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    toUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    skillOffered: String,
    skillRequested: String,
    message: String,
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    feedback: String
}, { timestamps: true });

module.exports = mongoose.model("Swap", SwapSchema);
