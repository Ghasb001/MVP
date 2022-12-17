//import Helpers from 'client/src/helpers.js';
let mysql = require('mysql');


var connection = mysql.createConnection({
  //host: 'localhost',
  user: 'root',
  password: '',
  database: 'RPP2209'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});



module.exports.connection = connection;