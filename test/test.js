var assert = require('assert');
var global = this;
describe('named function expression', function () {
    it('should not leak outer scope', function (done) {
        (function () {
            var fn = function func(){};
        }());
        assert.equal(typeof func, 'undefined');
        done();
    });
});

describe('input要素にサポートされていない値を入力', function () {
    it('input.typeが"text"を返す', function (done) {
        var input = document.createElement('input');
        input.type = 'InvalidType';
        assert.equal(input.type, 'text');
    });
});
