const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`server is up on ${port}`);
})
