/*var http = require('http');
var fs = require('fs')
  var server = http.createServer(function(req, res){
    
    fs.readFile('index.html',function(err,data){
        if(err){
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('File not found')
        }
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(data);
    })
  });
  server.listen(3000, 'localhost', function(){
    console.log('Server running');
  });
*/



const http = require('http');
const app = require('express')();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
});


app.get('/second', function(req, res){
	res.sendFile(__dirname+'/second.html');
});

app.get('/new_article', function(req, res){
	res.sendFile(__dirname+'/new_article.html');
});


app.post('/new_article', function(req, res){
	console.log(req.body);
	res.send('response successfully sent');
});


app.listen(3000, 'localhost', function() {
	console.log('Server running');
});
