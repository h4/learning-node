/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 0:52
 */

//  Создаём новый интерфейс чтения
var readline = require('readline'),
    iface = readline.createInterface(process.stdin, process.stdout, null);

// Задаём вопрос и получаем данные от пользователя
iface.question(">> What is the meaning of life? ", function(answer) {
    console.log("About the meaning of life, you said " + answer);
    iface.setPrompt(">> ");
    iface.prompt();
});

function closeInterface() {
    console.log('Leaving interface...');
    process.exit();
}

// Обработка ввода строк. Если подана команда .leave — уходим
iface.on('line', function(cmd) {
    if (cmd.trim() == '.leave') {
        closeInterface();
        return;
    } else {
        console.log("repeating command: " + cmd);
    }
    iface.setPrompt(">> ");
    iface.prompt();
});

iface.on('close', function() {
    closeInterface();
});
