/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 0:20
 */

var http = require('http'),
    fs = require('fs');

// Создаём сервер, как в 1.3, но вешаем его на unix-сокет
http.createServer(function(req, res) {
    var query = require('url').parse(req.url).query,
        file = require('querystring').parse(query).file,
        i,
        data;

    console.log(query);

    res.writeHead(200, {'content-type': 'text/plain'});

    // Пишем циферки
    for (i=0; i<100; i++) {
        res.write(i + '\n');
    }

    // Синхронное чтение файла, потому что соединение будет
    // закрыто в момент срабатывания асинхронного чтения
    data = fs.readFileSync(file, 'utf8');
    res.write(data);
    res.end();
}).listen('/tmp/node-server-sock');
