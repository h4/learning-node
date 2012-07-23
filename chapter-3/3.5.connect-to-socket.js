/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 0:25
 */

// Новый объект и параметры подключения по http
var http = require('http'),
    options = {
        method: 'GET',
        socketPath: '/tmp/node-server-sock',
        path: '/?file=main.txt'
    },
    req;

// Отправляем запрос
req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');

    // выводим данные от сервера
    res.on('data', function(chunk) {
        console.log('chunk o\' data:' + chunk);
    });
});

// Обработка запроса
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// Запись данных в тело запроса
req.write('data\n');
req.write('data\n');
req.end();
