// //import Helpers from 'client/src/helpers.js';
let mysql = require('mysql2');
var Promise = require('promise');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'RPP2209',
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});


connection.insert = function (object) {
  var query = 'INSERT INTO Students (studentName, git, gitUrl) VALUES ("' + object.studentName + '", "' + object.git + '", "' + object.gitUrl + '");';
  connection.query(query, (err, res) => {
    if (err) {
      console.log(query);
    } else {
      console.log('Inserted')
    }
  })
}

connection.retrieve = function () {
  var query = 'SELECT * FROM Students;';
  var array = [];
  connection.query(query, (err, res) => {
    if (err) {
      console.log(query);
    } else {
      console.log(res)
    }
  })
  return array;
}


  connection.cohort = {
  students: [{
    studentName: 'Alex Chaidez',
    git: 'achaidez',
    gitUrl: 'https://github.com/achaidez'
  }, {
    studentName: 'Ari Tavakoli',
    git: 'AriTavakoli',
    gitUrl: 'https://github.com/AriTavakoli'
  }, {
    studentName: 'Fig Fishkin',
    git: 'Fig2022',
    gitUrl: 'https://github.com/Fig2022'
  }, {
    studentName: 'Benny Van',
    git: 'bennyv8',
    gitUrl: 'https://github.com/bennyv8'
  }, {
    studentName: 'CJ Edgecombe',
    git: 'cjedgecombe',
    gitUrl: 'https://github.com/cjedgecombe'
  }, {
    studentName: 'Gabriela Taylor',
    git: 'gbmyt',
    gitUrl: 'https://github.com/gbmyt'
  }, {
    studentName: 'Patty Long',
    git: 'pattylong',
    gitUrl: 'https://github.com/pattylong?tab=repositories'
  }, {
    studentName: 'Guillermo Hasbun',
    git: 'Ghasb001',
    gitUrl: 'https://github.com/Ghasb001'
  }, {
    studentName: 'Kevin Hoang',
    git: 'juhmal',
    gitUrl: 'https://github.com/juhmal'
  }, {
    studentName: 'Harry Meng',
    git: 'harrymeng9',
    gitUrl: 'https://github.com/Harrymeng9'
  }, {
    studentName: 'Maddie Sime',
    git: 'madisonsime',
    gitUrl: 'https://github.com/madisonsime'
  }, {
    studentName: 'Melodie Peck',
    git: 'peckmc',
    gitUrl: 'https://github.com/peckmc'
  }, {
    studentName: 'Oscar Sandoval',
    git: 'Pawpee0',
    gitUrl: 'https://github.com/Pawpee0'
  }, {
    studentName: 'Rui Lin',
    git: 'Waittill',
    gitUrl: 'https://github.com/Waittill'
  }, {
    studentName: 'San Chui',
    git: 'Allen3021',
    gitUrl: 'https://github.com/Allen3021'
  }, {
    studentName: 'Shu Wu',
    git: 'swu1747',
    gitUrl: 'https://github.com/swu1747'
  }, {
    studentName: 'Thanh Ly',
    git: 'thanhgly',
    gitUrl: 'https://github.com/thanhgly'
  }, {
    studentName: 'Tiger Hong',
    git: 'tigerkh3',
    gitUrl: 'https://github.com/tigerkh3'
  }, {
    studentName: 'Katy Ouyang',
    git: 'XQ2013',
    gitUrl: 'https://github.com/XQ2013'
  }]
}

module.exports = connection;