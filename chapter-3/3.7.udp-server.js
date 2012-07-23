/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 0:42
 */

var dgram = require('dgram'),
    server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo) {
    console.log('Message: ' + msg + ' from ' + rinfo.address + ' : ' + rinfo.port);
});

server.bind(8124);
