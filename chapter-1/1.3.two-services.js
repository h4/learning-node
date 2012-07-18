/**
 * User: h4.github.com
 * Date: 19.07.12
 * Time: 1:03
 */

var http = require('http'),
    fs = require('fs');

// Функция для нагружения ноды работой
function writeNumbers(res) {
    var counter = 0;

    for (var i=0; i<100; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

http.createServer(function(req, res) {
    var query = require('url').parse(req.url).query,
        app = require('querystring').parse(query).file + '.txt';

    res.writeHead(200, {'content-type': 'text/plain'});

    // Пишем циферки
    writeNumbers(res);

    // Ждём две секунды, прежде чем прочитать файл
    setTimeout(function() {

        // Выводим значение запроса в консоль
        // Хром, зараза, ломится ещё и за фавиконкой, так что в консоли будет две строчки, а не одна
        console.log('opening ' + app);

        fs.readFile(app, 'utf8', function(err, data) {
            if (err) {
                res.write('Could not find file for reading\n');
            } else {
                res.write(data);
            }

            // Завершаем вывод
            res.end();
        });
    }, 2000);
}).listen(8124, function() {
        console.log('bound to port 8124');
    }
);

console.log('Node Server running on 8124');