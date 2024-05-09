// fibonacci 2


function generateFibonacci(n) {
  // Create an array to hold the Fibonacci sequence, starting with the first two numbers
  let output = [];
    if (n === 1) {
        output = [0];
        
    } 
    else if (n === 2) {
        output = [0,1]
    }
    else {
        output = [0,1];

        for (let i = 2; i < n; i++) {
            
             output.push(output[output.length - 2] + output[output.length - 1]);
         }
        
    }

return output;
    
}

// Example usage: generate the first 10 numbers in the Fibonacci sequence
console.log(generateFibonacci(3));

