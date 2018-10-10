require('./index');

describe('pipecompose', () => {
  it('should pipe', () => {
    expect("hello".pipe(doubleSay, capitalize, exclaim)).toBe("Hello, hello!");
  });
  
  it('should pipe, promises', () => {
    expect(Promise.resolve("hello").pipe(doubleSay, async x => capitalize(x), exclaim)).resolves.toBe("Hello, hello!");
  });
  
  it('should compose', () => {
    expect("hello".compose(exclaim, capitalize, doubleSay)).toBe("Hello, hello!");
  });

  it('should compose, promises', () => {
    expect(Promise.resolve("hello").compose(exclaim, async x => capitalize(x), doubleSay)).resolves.toBe("Hello, hello!");
  });
});

function doubleSay (str) {
  return str + ", " + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}
