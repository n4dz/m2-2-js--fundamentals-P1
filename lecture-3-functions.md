# 2.2.3 - JavaScript Functions

---

Functions let us package up a bit of code to be run at a later time.

---

The idea comes from math.

---

### Example 1

```js
// The formula to calculate the area of a rectangle is
// "length times width"

// Solve this for the following rectangle:
let rectangle = { length: 10, width: 4 };
let area = rectangle.length * rectangle.width;

// Write a function that can solve it for ANY rectangle.
function calculateArea(rect) {
  return rect.length * rect.width;
}
// function doNothing() {
// let interiotVariable = 5;
// }
```

---

### Example 2

```js
// Formula for area of circle: Pi times the radius squared
```

<!-- function calculateArea(radius) {
    return 3,141592 * radius ** 2;
}

or
function calculateArea(radius) {
    return Math.PI * radius ** 2;
}
-->

---

## Why?

- Functions let you group and reuse code.
- _Define_ a function with parameters between the brackets.
- to _call_ the function (i.e. use it), you pass it arguments whose values take the place of the parameters in the function definition.
- The function acts just like any other expression when called.
<!-- if (calculateAre(6) > 6) {
    console.log ('big circle')
} -->
- It produces the value you'd expect from the body of the function.
<!-- returnThings(a, b) {
    if (a>b) {
        return 'A is huge!';
    }
    return 'B wins';
}
 -->

---

### Exercise 1

```js
// Q1. Write a function that returns the sum of 3 numbers.
---
function addAllThreeNumbers(a, b, c) {
    return a + b + c;
}
undefined
addAllThreeNumbers(4, 6, 10)
20
---

// Q2. Write a function that returns the square of a number minus twice the number.
---
//  Usaly don't use only one letter in ()
function doMathThings(numberToProcess) {
    return numberToProcess ** 2 - numberToProcess * 2;
}
undefined
doMathThingd (10)
80
---


// Q3. Write a function that returns the a person's full name, given their first and last names.

---
!!!!
---

```

---

### Exercise 2

!!!

```js
// Q4. Write a function that returns the value of the tax for a given amount.

---
function calculateTax(amount) {
    let taxRate = 0.15;
    return amount * TaxRate;
}
undefine
calculateTax(10)
1.5

//or

function calculateTax
---

// Q5. Write a function that returns the value 42.

---
function return42() {
return 42;
}
---

// Q6. Write a function that returns "Hello!".
```

---

- Functions are key in implementing these software development principles.
- Complexity emerges from simplicity

[Alternate Function definition](https://www.cs.utah.edu/~germain/PPS/Topics/functions.html)
