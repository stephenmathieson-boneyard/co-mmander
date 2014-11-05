
var commander = require('commander');
var Command = commander.Command;
var isGenFn = require('is-generator-function');
var co = require('co');

module.exports = new Command;

var action = Command.prototype.action;
Command.prototype.action = function(fn) {
  if (isGenFn(fn)) fn = co(fn);
  return action.call(this, fn);
};
