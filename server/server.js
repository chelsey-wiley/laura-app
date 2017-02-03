var express = require('express');
var app = express();

app.use(express.static('public'));
port = process.env.PORT || 5112;

app.listen(port, function() {
  console.log('listening on PORT or locally: 5112.');
});
