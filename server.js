// Require the packages we will use:
var http = require("http"),
    socketio = require("socket.io"),
    fs = require("fs"),
    express = require('express');

var appEx = express();
var app = http.createServer(appEx);

app.listen(8080);  //listen on port 8080

appEx.use(express.static(__dirname + '/public'));


// Socket.io
var io = socketio.listen(app);
io.on("connection", function (socket) {
    // This callback runs when a new Socket.IO connection is established.
    socket.on('writeJSON', function (data) {
      console.log("Received data");
      fs.writeFile("public/data.json", data, 'utf8', function (err) {
          if (err) {
              return console.log(err);
          }
      });
    });
});
