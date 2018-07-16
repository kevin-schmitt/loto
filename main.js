// import
const express = require('express');
const path = require('path');
const app = express();
const loto = require("./module/loto.js");
const conf = require("./conf.js");

// define dir view and css
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//routing
app.get('/', (req, res) => res.render('index.ejs', {displayNumbers: false}));
app.post('/getResults', (req, res) => res.render('index.ejs', {Numbers: loto.getNumbers(), displayNumbers: true}));

app.listen(conf.port, () => { 
	console.log('Port:' + conf.port);
});

