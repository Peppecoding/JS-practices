function isLeap(year) {
  if (year % 400 === 0) {
    return true; // Leap year if divisible by 400
  } else if (year % 100 === 0) {
    return false; // Not leap year if divisible by 100 but not 400
  } else if (year % 4 === 0) {
    return true; // Leap year if divisible by 4 but not by 100
  } else {
    return false; // Not a leap year otherwise
  }
}


// Get user input for the year
let year = parseInt(prompt("Enter a year: "));

// Check if the year is a valid number
if (isNaN(year)) {
  console.error("Please enter a valid year (number).");
} else {
  // Call the isLeap function and display the result
  let is_leap_year = isLeap(year);
  if (is_leap_year) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}