/**
 * @author Rafael Kallis <rk@rafaelkallis.com>
 */

const invariant = require('invariant');
const isPromise = require('is-promise');

if(!Object.prototype.pipe) Object.prototype.pipe = function(...fs) {
  invariant(fs.length > 0, 'should pass at least one argument to pipe');
  return fs.reduce((x,f)=>isPromise(x)?x.then(f):f(x),this)
}

if(!Object.prototype.compose) Object.prototype.compose = function(...fs) {
  invariant(fs.length > 0, 'should pass at least one argument to compose');
  return fs.reduceRight((x,f)=>isPromise(x)?x.then(f):f(x),this)
}
