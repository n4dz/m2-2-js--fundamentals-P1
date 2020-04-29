// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
  // Math.round(x) returns the value of x rounded to its nearest integer:
  //https://www.w3schools.com/js/js_comparisons.asp
  return Math.round((a + b + c + d + e) / 5);
}
console.log(calculateAverage(76, 60, 83, 100, 78));
//79
