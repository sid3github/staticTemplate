const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const server = express();

// static route.
server.use(express.static('views'));

server.use(bodyParser.json());

server.get('/static',function(req,res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


server.listen(8080, function(){
    console.log('Port connected to 8080');
});