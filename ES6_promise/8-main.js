import divideFunction from './8-try';

console.log(divideFunction(10, 2));
try {
  console.log(divideFunction(10, 0));
} catch (error) {
  console.log(error.message);
}
