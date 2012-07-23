/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 1:58
 */

var util = require('util'),
    eventEmitter = require('events').EventEmitter,
    fs = require('fs'),
    ic;

function InputChecker(name, file) {
    this.name = name;

    // Создаём файл-поток на запись.
    // Эта штука работает в фоне
    this.writeStream = fs.createWriteStream('./' + file + '.txt',
        {'flags' : 'a', 'encoding' : 'utf8', 'mode' : '0666'}
    );
}

// Наследуем возможность обработки кастомных событий
util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input) {
    var command = input.toString().trim().substr(0,3);

    // Возбуждаем разные обработчики в зависимости от введённой команды
    if (command == 'wr:') {
        this.emit('write', input.substr(3, input.length));
    } else if (command == 'en:') {
        this.emit('end');
    } else {
        this.emit('echo', input);
    }
};

// Создаём экземпляр чекера
ic = new InputChecker('Shelley', 'output');

// И навешиваем обработчики событий
ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
    console.log(this.name + ' wrote ' + data);
});

ic.on('end', function() {
    process.exit();
});

process.stdin.resume();
process.stdin.setEncoding('utf8');

// Вызываем метод чекера при вводе данных в терминал
process.stdin.on('data', function(input) {
    ic.check(input);
});
