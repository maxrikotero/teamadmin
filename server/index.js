const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { mongoose } = require('./dataBase/database');


//init app
const app = express();

//Settings
app.set('port', process.env.PORT || 5000);

//Middleware
app.use(express.json());
// app.use(bodyParser.json());


// Routes
app.use('/api/player', require('./routes/playerRoute'));


// Static

//listening to
app.listen(app.get('port'), () => {
    console.log('server on port 5000');
});

