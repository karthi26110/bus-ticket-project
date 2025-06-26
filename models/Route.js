const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    departureTime: { type: Date, required: true },
});

module.exports = mongoose.model('Route', routeSchema);
