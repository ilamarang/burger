var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

//Setup static content
app.use(express.static('public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(require('./controllers/burgers_controller'));

var PORT = process.env.PORT || 3000;
app.listen(PORT);
