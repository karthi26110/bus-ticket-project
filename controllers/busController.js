const Bus = require('../models/Bus');

exports.addBus = async (req, res) => {
    const { busNumber, seats, routes } = req.body;
    const bus = new Bus({ busNumber, seats, routes });
    await bus.save();
    res.status(201).json(bus);
};

exports.updateBus = async (req, res) => {
    const { id } = req.params;
    const { busNumber, seats, routes } = req.body;
    const bus = await Bus.findByIdAndUpdate(id, { busNumber, seats, routes }, { new: true });
    res.json(bus);
};
