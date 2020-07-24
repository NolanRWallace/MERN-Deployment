const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate must have a name"],
        minlength: [3, "Only stupid pirate names are less than 3 characters"],
        maxlength: [50, "Long pirate names are also stupid"]
    },
    img: {
        type: String
    },
    chest: {
        type: Number,
        required: [true, "Any half decent pirate has at least 1 treasure chest"],
        min: [1, "Any half decent pirate has at least 1 treasure chest"],
    },
    catchPhrase: {
        type: String,
        required: [true, "Whats a pirate without a catch phrase....not a pirate thats what"],
        minlength: [5, "No catch phrases under 5 characters could be any good"],
        maxlength: [50, " Catch Phrases are not novels matey"]
    },
    crewPosition: {
        type: String,
        required: [true, "Every pirate has a position in the crew"],
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Common pirate question and we need to know"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Common pirate question and we need to know"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Common pirate question and we need to know"]
    }
}, {timestamps: true})

module.exports.Pirate = mongoose.model('Pirates', PirateSchema);