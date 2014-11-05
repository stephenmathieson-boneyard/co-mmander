
var assert = require('assert');
var exec = require('co-exec');
var node = 'node --harmony-generators';

describe('co-mmander', function() {
  it('should support generator functions', function*(){
    var cmd = node + ' example.js a somearg';
    var stdout = yield exec(cmd);
    assert('a: somearg' == stdout);
  });

  it('should support regular functions', function*(){
    var cmd = node + ' example.js b somearg';
    var stdout = yield exec(cmd);
    assert('b: somearg' == stdout);
  });
});
