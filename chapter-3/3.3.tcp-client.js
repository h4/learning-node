/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 0:06
 */

var net = require('net'),
    client = new net.Socket();

// Данный идут как буфер, поэтому их нужно раскодировать
client.setEncoding('utf8');

// Подключаемся на порт 8124
client.connect('8124', 'localhost', function() {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});

// Подготавливаем терминал для ввода данных
process.stdin.resume();

// Всё, что вводится в консоль — отправляем на сервер
process.stdin.on('data', function(data) {
    client.write(data);
});

// Всё, что присылает сервер — выводим в консоль
client.on('data', function(data) {
    console.log(data);
});

// Сообщаем о закрытии соединения
client.on('close', function() {
    console.log('connection is closed');
});
