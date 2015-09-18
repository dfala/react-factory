// Dependencies
var express = require('express');

// App definition
var app = express();

// Serving app
app.use(express.static(__dirname + '/'));


if (process.env.NODE_ENV == "dev") {
	// DEVELOPMENT-SPECIFIC CONFIG //
	var portNum = 3000;
} else {
	// PRODUCTION-SPECIFIC CONFIG //
	var portNum = 80;
}

app.listen(portNum, function () {
    console.log('Listening on port:', portNum);
});
