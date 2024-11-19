//implement currying funciton let say f(a,b,c) => f(a)(b)(c)

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
      /// continue
    };
  };
}
function sum(a, b, c, d = 0) {
  return a + b + c + d;
}

let curriedSum = curry(sum);

console.log(curriedSum.toString());
console.log(curriedSum(2)(3)(1));
