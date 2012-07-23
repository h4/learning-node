/**
 * User: h4.github.com
 * Date: 23.07.12
 * Time: 3:30
 */

// process - экземпляр объекта Node Process, есть всегда
// По-умолчанию поток ввода на паузе. Возобновляем чтение
process.stdin.resume();

// Навешиваем обработчик события
process.stdin.on('data', function(chunk) {
    process.stdout.write('data: ' + chunk);
});
