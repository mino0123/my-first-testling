var assert = require('assert');
var global = this;
describe('named function expression', function () {
    var fn = function func(){};
    it('should not leak outer scope', function (done) {
        assert.equal(global.func, undefined);
        done();
    });
});