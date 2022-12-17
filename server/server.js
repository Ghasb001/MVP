const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const webpage = 'client/dist/index.html'
const connection = require('./data.js');
const Promise = require('promise');


app.use(express.static('client/dist'));
app.use(express.json());

app.post('/cohort', (req, res) => {
  let studentList = connection.cohort.students;
  studentList.forEach(student => {
    connection.insert(student)
  })
  res.end();
})


app.get('/cohort', (req, res) => {
  // new Promise((resolve, reject) => {
  //   resolve(connection.retrieve())
  // })
  // .then(data => {
  //   //console.log(data)
  // })
  connection.retrieve()
  res.end();
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = router;