// fibonacci

function generateFibonacci(n) {
  // Create an array to hold the Fibonacci sequence, starting with the first two numbers
  let fibonacci = [0, 1];

  // Start the loop from the third element's position, because the first two are already defined
  for (let i = 2; i < n; i++) {
    // Add the last two numbers in the sequence to get the next number
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

// Example usage: generate the first 10 numbers in the Fibonacci sequence
console.log(generateFibonacci(10));
