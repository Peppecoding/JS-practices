// fizz Buzz
//  for loop, start; end; chnage

function fizzbuzz () {
for (i = 1; i < 101; i++) {

 if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Check for "Fizz" condition (multiples of 3)
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Check for "Buzz" condition (multiples of 5)
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // If none of the above conditions are true, just push the count itself
    else {
        console.log(i);
    }
    
}

}

fizzbuzz ();