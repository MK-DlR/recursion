// fibonacci.js

// regular fibonacci function
function fibs(n) {
  let fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
}

console.log(fibs(8));

// recursive fibonacci function
function fibsRec(n) {
  if (n <= 2) {
    return [0, 1];
  } else {
    let fibArray = fibsRec(n - 1);
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
    return fibArray;
  }
}

console.log(fibsRec(8));
