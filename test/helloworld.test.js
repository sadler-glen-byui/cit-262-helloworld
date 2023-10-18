import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it('Should say hello', () => {
  const helloString = sayHello();
  console.log(helloString);

  assert.equal(helloString, 'hello');

  //   expect(helloString).toBe('hello');
});
