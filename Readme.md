
# co-mmander

  Tiny wrapper around commander supporting generator functions

## Example

```js
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

```

## License 

(The MIT License)

Copyright (c) 2014 Stephen Mathieson &lt;me@stephenmathieson.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.