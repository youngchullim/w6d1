function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(n) {
    if (n) {
      numbers.push(n);
      if (numbers.length === numArgs) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return numbers.reduce(reducer);
      } else {
        return this;
      }
    }
  }
  return _curriedSum;
};

var osum = curriedSum(4);
osum(5)(30)(20)(1); // => 56


Function.prototype.curry = function(numArgs) {
  const nums = [];
  let x = this;
  
  function _stephCurry(...args) { 
    args.forEach((el) => nums.push(el));

    if (nums.length === numArgs) {
      return x.call("", ...nums);
    } else {
      return _stephCurry;
    }
  }

  return _stephCurry;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
sumThree(4, 20, 6); // == 30
sumThree.curry(3)(4)(4)(4); 

