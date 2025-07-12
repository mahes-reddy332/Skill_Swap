const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    location: String,
    profilePhoto: String,
    skillsOffered: [String],
    skillsWanted: [String],
    availability: [String], // ["weekends", "evenings"]
    isPublic: { type: Boolean, default: true },
    role: { type: String, default: "user" } // or 'admin'
});

module.exports = mongoose.model("User", UserSchema);
