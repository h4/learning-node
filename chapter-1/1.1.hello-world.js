/**
 * User: h4.github.com
 * Date: 19.07.12
 * Time: 1:03
 */

// Загружаем модуль http
var http = require('http');

// Создаём сервер
http.createServer(function(req, res) {

    // Отправляем заголовки ответа...
    res.writeHead(200, {'content-type': 'text/plain'});

    // ...и тело ответа, и закрываем соединение
    res.end('Hello world! \n');
}).listen(8124);

// Немного гадим в терминал
console.log('Node Server running on 8124');