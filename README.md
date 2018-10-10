### pipecompose

###### trivial example

```js
require('pipecompose');

const result = "hello".pipe(
  doubleSay,
  capitalize,
  exclaim,
);

result //=> "Hello, hello!"

function doubleSay (str) {
  return str + ", " + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}
```

###### promise example
```js
const result = await "hello".pipe(
  doubleSay,
  capitalize,
  exclaim,
);

result //=> "Hello, hello!"

async function doubleSay (str) {
  return str + ", " + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
async function exclaim (str) {
  return str + '!';
}
```
