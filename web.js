var express = require('express');
var buffer = fs.readFileSync('~/index.html');

var app = express.createServer(express.logger());
len = buffer.length;

app.get('/', function(request, response) {
  response.send(buffer.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
