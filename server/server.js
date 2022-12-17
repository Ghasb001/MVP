const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const webpage = 'client/dist/index.html'
const Helpers = 'client/src/helpers.js';

const connection = require('./data.js');


router.get('/', function (req, res, next) {
  connection.connect();
  Helpers.forEach(element => {
    var query = `INSERT INTO Students (name, git, link) (${element.name}, ${element.git}, ${element.name})`
    connection.query(query, function (err, res) {
      res.send('GET');
    })
  })

  res.end();
});



app.use(express.static('client/dist'));
app.use(express.json());

app.post('/', (req, res) => {
  res.send('POST request')
})

app.get('/', (req, res) => {
  res.status(200).json('connected');
  res.end();
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = router;