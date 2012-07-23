/**
 * User: h4.github.com
 * Date: 24.07.12
 * Time: 1:41
 */

var util = require('util'),
    two,
    three;

function First() {
    var self = this;

    this.name = 'first';
    this.test = function() {
        console.log(self.name);
    };
}

First.prototype.output = function() {
    console.log(this.name);
};

function Second() {
    Second.super_.call(this);
    this.name = 'second';
}

// Наследуем Second от First
util.inherits(Second, First);

two = new Second();

function Third(func) {
    this.name = 'third';
    this.callMethod = func;
}

three = new Third(two.test);

// Все три раза выведется "second"
two.output();
two.test();
three.callMethod();
