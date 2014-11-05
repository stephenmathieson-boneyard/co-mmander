
var fmt = require('util').format;
var program = require('./');

program.version('0.0.1');

// generator function
program
  .command('a <arg>')
  .action(function*(arg) {
    yield a(arg);
  });

// regular function
program
  .command('b <arg>')
  .action(function(arg) {
    b(arg);
  });

program.parse(process.argv);

function a(arg) {
  return function(fn) {
    process.stdout.write(fmt('a: %s', arg));
    fn();
  };
}

function b(arg) {
  process.stdout.write(fmt('b: %s', arg));
}
