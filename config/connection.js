//Import sql package
var mysql = require('mysql');

//Create a connection String
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db'

});

module.exports = connection;
