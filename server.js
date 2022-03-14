// Load Node modules
var express = require('express');
const ejs = require('ejs');
// loading a router
const somereouter = require('./routes/someroute')
// Initialise Express
var app = express();

// Render static files
app.use(express.static('public'));
// to get values from post you need:
app.use(express.urlencoded({extended:true})) // now we need middleware
app.use(express.json) // to make json requests
// Set the view engine to ejs
app.set('view engine', 'ejs');
// linking a router
app.use('/rutename',somereouter)
// Port website will run on
app.listen(8080);
//

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    var name = "Louise";
    var nameList = ["kyle", "Eli", "Adian"]
    // Render index page
    res.render('pages/index', {
        // EJS variable and server-side variable
        nameejs: name,
        nameList: nameList
    });
});

 