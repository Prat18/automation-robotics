const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mc4Schema = new Schema({
    sensordata: { type: Number, required: true },
    time: { type: Date, required: true, default: Date.now() },
    solenoidvalue: { type: Number, required: true }
});

module.exports = mongoose.model('Mc4', mc4Schema);