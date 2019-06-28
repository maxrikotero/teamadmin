const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    firstanme: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = { Player }