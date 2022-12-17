// //import Helpers from 'client/src/helpers.js';
// let mysql = require('mysql2');


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'RPP2209',
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }

//   console.log('Connected to the MySQL server.');
// });

// /*
// write a function here to handle insert query
// now that connection is available to server,


// */

// connection.insert = function (object) {
//   var query = `INSERT INTO Students (name, git, link) VALUES (${object.name}, ${object.git}, ${object.link})`
//   connection.query(query, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Inserted')
//     }
//   })
//   console.log(query);
// }





// //module.exports.connection = connection;