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