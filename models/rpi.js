const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rpiSchema = new Schema({
    keypad: { type: Number, required: true },
    status: { type: Boolean, required: true },
    time: { type: Date, required: true, default: Date.now() }
});

module.exports = mongoose.model('Rpi', rpiSchema);