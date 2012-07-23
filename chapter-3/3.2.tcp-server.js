/**
 * User: h4.github.com
 * Date: 23.07.12
 * Time: 23:59
 */

// Создаём новый tcp-сервер, который слушает 8124 порт и гадит в консоль по событиям
var net = require('net'),
    server;

server = net.createServer(function(conn) {
    console.log('connected');

    conn.on('data', function(data) {
        console.log(data + ' from ' + conn.remoteAddress + ' : ' + conn.remotePort);

        conn.write('Repeating: ' + data);
    });

    conn.on('close', function() {
        console.log('client closed connection');
    });

}).listen(8124);

console.log('listening on port 8124');
