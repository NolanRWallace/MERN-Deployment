const { Pirate } = require('../models/pirate.model');


module.exports.allPirates = (req, res) => {
    Pirate.find({})
        .then(pirate => res.json({message:"success", results: pirate}))
        .catch(err => res.status(400).json(err))
}

module.exports.newPirate = (req, res) => {
    Pirate.create(req.body)
        .then(pirate => res.json({message:"success", results: pirate}))
        .catch(err => res.status(400).json(err))
}

module.exports.OnePirate = (req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(pirate => res.json({message:"success", results: pirate}))
        .catch(err => res.status(400).json(err))
}

module.exports.DeletePirate = (req, res) => {
    Pirate.findOneAndDelete({ _id: req.params.id})
    .then(pirate => res.json({message:"success", results: pirate}))
    .catch(err => res.status(400).json(err))
}

module.exports.UpdatePirate = (req, res) => {
    Pirate.findOneAndUpdate({ _id: req.params.id}, req.body, {new:true, runValidators:true })
        .then(pirate => res.json({message:"succes", results: pirate}))
        .catch(err => res.status(400).json(err))
}