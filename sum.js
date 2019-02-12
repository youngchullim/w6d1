function sum(...arguments) {
  const arg = Array.from(arguments)
  let sum = 0
  arg.forEach((el) => {
    sum += el
  });
  return sum;
}

sum(1, 2, 3, 4) === 10
sum(1, 2, 3, 4, 5) === 15


