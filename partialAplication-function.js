function partial(func, ...fixedArguments) {
  return function (...remainingArguments) {
    return func(...fixedArguments, ...remainingArguments);
  };
}

//test

const multiply = (a, b, c) => a * b * c;
const multiply2By3 = partial(multiply, 2, 3);

console.log(multiply2By3(2));
