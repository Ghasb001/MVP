const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const webpage = 'client/dist/index.html'


app.use(express.static('client/dist'));
app.use(express.json());

app.post('/', (req, res) => {
  res.send('POST request to homepage')
})

app.get('/', (req, res) => {
  res.send('connected')
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});