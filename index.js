const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// var serveStatic = require('serve-static');
const serveIndex = require('serve-index');


const server = express();

server.use('/ftp', express.static('views/ftp'), serveIndex('views/ftp', {'icons': true}));

// server.use(serveStatic('views/ftp', {'index': ['index.html', 'index.htm']}));

// static route.
server.use(express.static('views'));

server.use(bodyParser.json());

server.get('/ftp',function(req,res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


server.listen(8080, function(){
    console.log('Port connected to 8080');
});