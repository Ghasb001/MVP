const express = require('express');
let app = express();


app.use(express.static(__dirname + 'client/dist/index.html'));
app.use(express.json());

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.post('/', (req, res) => {
  res.send('POST request to homepage')
})

app.get('/', (req, res) => {
  console.log(req);
  res.send('GET request to homepage')
})