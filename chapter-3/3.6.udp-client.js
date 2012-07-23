/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 0:38
 */

//  UDP объект в неожиаданном модуле...
var dgram = require('dgram'),
    client = dgram.createSocket('udp4');

process.stdin.resume();

process.stdin.on('data', function(data) {

    // данные по UDP идут только как буфер,
    // для вывода в консоль нужно сказать кодировку
    console.log(data.toString('utf8'));

    // Отправляем данные и надеемся, что их есть кому принимать %))
    client.send(data, 0, data.length, 8124, 'localhost', function(err, bytes) {
        if(err) {
            console.log('error: ' + err);
        } else {
            console.log('successful send: ' + bytes + ' bytes');
        }
    });
});
