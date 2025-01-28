function fibo(num) {
  if (num < 2) {
    return num;
  }

  let prev = 0,
    curr = 1,
    next;

  for (let i = 2; i <= num; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return next;
}

console.log(fibo(10));
