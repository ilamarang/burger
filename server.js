var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(require('./controllers/burgers_controller'));

var PORT = process.env.PORT || 3000;
app.listen(PORT);
