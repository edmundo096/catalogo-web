/**
 * Created by Edmundo on 4/8/2016
 */
var express       = require('express');
var favicon       = require('serve-favicon');
var morgan        = require('morgan');                  // Logger.
var app = express();


// App settings.
app.set('view engine', 'ejs');
app.set('viewsDir', __dirname + '/views');

// Set middleware.
app.use(favicon(__dirname + '/public/favicon.ico', {maxAge: 60 * 60 * 24 * 1000})); // maxAge 1 day
app.use(morgan('combined', { skip: function (req, res) { return res.statusCode < 400 } })); // Log errors only.
app.use(express.static('public'));

// *Idea, middleware to remove .html (and log them)


// Routing.
var routeRoot       = require('./routes/root');

//var apiRouter       = require('./routes/api');

app.get('/', routeRoot.root);

//app.use('/api', apiRouter);


// Config and launch.
var port = process.env.PORT || process.argv[2] || 80;

app.listen(port, function() {
  console.log('Running Express, running on port', port)
});
