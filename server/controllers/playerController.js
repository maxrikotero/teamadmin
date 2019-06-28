const mongoose = require('mongoose');
const { Player } = require('../models/Player');

module.exports = {

    fetchPlayers: async (req, res) => {
        const players = await  Player.find();
        res.status(200).json(players);
    },

    addPlayer: async (req, res) => {
        const { firstanme, lastname, email } = req.body;

        const player = await new Player({firstanme, lastname, email}).save();
        res.status(400).json({msg: 'New wood added', player: player.firstanme});
    }

}
