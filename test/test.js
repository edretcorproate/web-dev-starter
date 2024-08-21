import {sayHello} from '../js/main.js';
import {addNum} from '../js/main.js';

QUnit.module('hello', function() {
    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });
});

QUnit.module('add', function() {
    QUnit.test('make sure the add function outputs 3', function(assert) {
        var result = addNum();
        assert.equal(result, '3');
    });
});