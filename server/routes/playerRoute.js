const express = require('express');
const router = express.Router();

// Controller
const playerController = require('../controllers/playerController');


//@ GET 'api/player/players'
//@ Desc Get a list of all players
router.get('/players', playerController.fetchPlayers);


//@ POST 'api/player/new_player'
//@ Desc Add a new player
router.post('/new_player', playerController.addPlayer);

module.exports = router;