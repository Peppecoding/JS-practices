let output = []; // The output array where results are stored
let count = 1;   // Initialize count to start from 1

function fizzBuzz() {

    while(count <= 100) {
    // Check for the "FizzBuzz" condition first (multiples of both 3 and 5)
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    // Check for "Fizz" condition (multiples of 3)
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    // Check for "Buzz" condition (multiples of 5)
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    // If none of the above conditions are true, just push the count itself
    else {
        output.push(count);
    }
    count++; // Increment count for the next call
    console.log(output); // Correct the syntax error and log the output
}}

// Call the function
fizzBuzz();



// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     let output = "";
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);
//   }
// }

// // Call the function with n = 100
// fizzBuzz(100);
