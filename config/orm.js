var connection = require('./connection');

//Connect to the database
connection.connect(function(err) {
    if (err) throw err
    console.log('Connected to Database');
  })

var orm = {

'selectAll': function(cb) {
  connection.query('SELECT * FROM burger', function (err, result) {
      if (err) throw err;
      cb(result);
    });
},
'insertOne': function() {

},
'updateOne' : function() {

}

}

//export ORM object
module.exports = orm;
