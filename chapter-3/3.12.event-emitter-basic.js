/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 1:52
 */

var eventEmitter = require('events').EventEmitter,
    counter = 0,
    em = new eventEmitter();

// Возбуждаем собыетие по таймеру
setInterval(function() {
    em.emit('timed', counter++);
}, 3000);

// Обрабатываем событие
em.on('timed', function(data) {
    console.log('timed ' + data);
});
