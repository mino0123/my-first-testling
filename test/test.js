var assert = require('assert');

describe('input要素にサポートされていない値を入力', function () {
    it('input.typeが"text"を返す', function (done) {
        var input = document.createElement('input');
        try {
            input.type = 'InvalidType';
        } catch (e) {}
        assert.equal(input.type, 'text');
        done();
    });
});
