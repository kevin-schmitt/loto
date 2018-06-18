// import
const express = require('express');
const path = require('path');
const app = express();
const loto = require("./module/loto.js");
// define dir view and css
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//routing
app.get('/', (req, res) => res.render('index.ejs', {Numbers: loto.getNumbers()}));

app.listen(3000, () =>
   console.log('Example app listening on port 3000!')
);
