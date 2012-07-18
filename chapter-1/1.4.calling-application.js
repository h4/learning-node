/**
 * User: h4.github.com
 * Date: 19.07.12
 * Time: 2:05
 */

/*
 * Приложение для тестирования асинхронной природы ноды
 * Нужно параллельно запускать 1.3.two-services.js и это файл
 * После чего из браузера запрашивать /?file=main

 * Для большего просветления — сделать counter и app в 1.3 глобальными
*/

var http = require('http'),
    options = {     // Параметры запроса
        host: 'localhost',
        port: 8124,
        path: '/?file=secondary',
        method: 'GET'
    },
    processPublicTimeline = function(response) { // Не совсем понятно, зачем передаётся response. Наверно, так надо.
        console.log('finished request');
    };

for (var i=0; i<2000; i++) {
    http.request(options, processPublicTimeline).end();
}