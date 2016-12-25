var routes = require('./routes/route');
var express = require('express');
var app = express();
app.use('/', routes);

app.listen(8000);
