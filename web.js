var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));

app.get('/*', function(req, res) {
    res.sendfile(__dirname+'/dist/index.html');
});

app.listen(process.env.PORT || 5000, function() {
    console.log('start listening');
});