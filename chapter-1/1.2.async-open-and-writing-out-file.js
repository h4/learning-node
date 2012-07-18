/**
 * User: h4.github.com
 * Date: 19.07.12
 * Time: 1:03
 */

var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {

    // Открываем файл на чтение.
    // Адресация от корня, а не от js файла, это вам не php
    fs.readFile('main.txt', 'utf8', function(err, data) {
        res.writeHead(200, {'content-type': 'text/plain'});

        if (err) {
            res.write('Could not find file for reading\n');
        } else {
            res.write(data);
        }

        res.end();
    });
}).listen(8124, function() {
        console.log('bound to port 8124');
    }
);

console.log('Node Server running on 8124');