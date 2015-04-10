var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    'use strict'
    var url = req.url;
    console.log(url);
    if (url === "/index.html" || url === "/calc.html" || url === "/") {
        sendFile(res, "../index.html", "text/html");
    } else if (url === "/css/testat1-Design2.css") {
        sendFile(res, "../css/testat1-Design2.css", "text/css");
    }else if (url === "/css/testat1-Design1.css") {
        sendFile(res, "../css/testat1-Design1.css", "text/css");
    } else if (url === "/js/calc.js") {
        sendFile(res, "../js/calc.js", "text/javascript");
    }else if (url === "/deadLink.png") {
        sendFile(res, "../pictures/deadLink.png", "image/gif");
    } else{
        sendFile(res, "../deadLink.html", "text/html");
    }
}).listen(3000);

console.log('Server running at http://localhost:3000/');

function sendFile(res, fileName, contentType) {
    fs.readFile(fileName, function (err, data) {
        if (err) {
            throw err;
        }
        res.writeHeader(200, {"Content-Type": contentType});
        res.write(data);
        res.end();
    });
}