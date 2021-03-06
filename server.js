var express = require('express')
  , bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

var recievedMessages = ""
var messageStatuses = ""
var notifications = ""

app.get("/", function (request, response) {
  response.send("<h1>Recieved messages</h1>\n"+recievedMessages+"<h1>Send messages statuses</h1>\n"+messageStatuses+"\n<h1>Notifications</h1>"+notifications);
});

app.post("/", function (request, response) {
  console.log('Incoming message: ' + JSON.stringify(request.body));
  recievedMessages += "<p>" + JSON.stringify(request.body) + "</p>";
  response.sendStatus(200);
});

app.post("/messages", function (request, response) {
  console.log('Incoming message status: ' + JSON.stringify(request.body));
  messageStatuses += "<p>" + JSON.stringify(request.body) + "</p>";
  response.sendStatus(200);
});

app.post("/notifications", function (request, response) {
  console.log('Incoming notification: ' + JSON.stringify(request.body));
  notifications += "<p>" + JSON.stringify(request.body) + "</p>";
  response.sendStatus(200);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
