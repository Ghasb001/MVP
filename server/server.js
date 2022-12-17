const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const webpage = 'client/dist/index.html'
const Helpers = 'client/src/helpers.js';
let mysql = require('mysql2');
const connection = require('./data.js');


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
//   var query = 'INSERT INTO Students (studentName, git, gitUrl) VALUES ("' + object.studentName + '", "' + object.git + '", "' + object.gitUrl + '");';
//   connection.query(query, (err, res) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Inserted')
//     }
//   })
// }

app.use(express.static('client/dist'));
app.use(express.json());

app.post('/', (req, res) => {
  res.send('POST request')
})

app.get('/cohort', function (req, res) {
  let studentList = connection.cohort.students;
  studentList.forEach(student => {
    connection.insert(student)
  })
  // Helpers.forEach(element => {
  //   var query = `INSERT INTO Students (name, git, link) (${element.name}, ${element.git}, ${element.link})`
  //   connection.query(query, function (err, res) {
  //     res.send('GET');
  //   })

      //connection.insert(connection.cohort.students[0])
  //})

  res.end();
});


app.get('/', (req, res) => {
  res.status(200).json('connected');
  res.end();
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = router;