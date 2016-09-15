//	Let's hook up the packages that are needed
var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
var port = 3001;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//	We can include our routes, for these to be accessible they need to be stacked here before we start the
//	server. There doesn't seem to be any difference in the order that these are stacked up.
require('./books.js')(app);

//	Now let's start up our server, any changes made mean that the application needs to be restarted again.
app.listen(port)
console.log('Application server started on port 3001. Cors enabled.');