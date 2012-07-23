/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 1:02
 */

// Создаём два дочерних процесса. find и grep, второй аргумент — параметры команды
// Идея — нодой выполнить аналог вот этого:
// $ find . -ls | grep main

var spawn = require('child_process').spawn,
    find = spawn('find', ['.', '-ls']),
    grep = spawn('grep', ['main']);

grep.stdout.setEncoding('utf8');

// Передаём данные от find на вход grep
find.stdout.on('data', function(data) {
    grep.stdin.write(data);
});

// Выводим результат grep в консоль
grep.stdout.on('data', function (data) {
    console.log(data);
});


// Обработка ошибок
find.stderr.on('data', function (data) {
    console.log('grep stderr: ' + data);
});
grep.stderr.on('data', function (data) {
    console.log('grep stderr: ' + data);
});

// Обработка завершения процесса
find.on('exit', function (code) {
    if (code !== 0) {
        console.log('find process exited with code ' + code);
    }

    // говорим грепу, что больше ничего вводить не будем
    grep.stdin.end();
});

grep.on('exit', function (code) {
    if (code !== 0) {
        console.log('grep process exited with code ' + code);
    }
});
