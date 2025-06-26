const Route = require('../models/Route');

exports.addRoute = async (req, res) => {
    const { from, to, departureTime } = req.body;
    const route = new Route({ from, to, departureTime });
    await route.save();
    res.status(201).json(route);
};

exports.updateRoute = async (req, res) => {
    const { id } = req.params;
    const { from, to, departureTime } = req.body;
    const route = await Route.findByIdAndUpdate(id, { from, to, departureTime }, { new: true });
    res.json(route);
};
