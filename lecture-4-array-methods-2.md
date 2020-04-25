# 2.2.4 - JavaScript Array methods P2

---

- Some array methods need a function as a parameter.
- These are arguably the most flexible and useful methods.

---

# Problem

Let's say we have an array of numbers:

`[3, -7, 1, 5, -2, 8, -9, 4]`

We want to filter out all negative numbers:

`[3, 1, 5, 8, 4]`

How do we do that?

<!-- let arr= [3, -7, 1, 5, -2, 8, -9, 4];
undefined
let positiveArr = []
undefined
for (let 1 = 0; 1 < arr.length 1 += 1) {
  let currentItem = arr [1];
  if (currentItem > 0) {
    positiveArr.push(currentItem);
  }
}
5
positiveArr
(5) [3, 1, 5, 8, 4]

// OR with 'filter' //

[3, -7, 1, 5, -2, 8, -9, 4];
let newPositiveArray = arr.filter(function checkIfPositive(item){
  return item > 0;
})
undefined
newPositiveArray
(5) [3, 1, 5, 8, 4]
let negativeItems = arr.filter(function /putnamehere/(item){
  return item < 0;
})
undefined
negativeItems
(3) [-7, -2, -9]

**Filter goes to item one by one and call function once for each of them. If function goes true it keeps that item otherwise it reject the item. Filter dosen't change the Array.**

 -->

---

`for` loops are very _flexible_, but they're not very _focused_.

Methods like `filter` are much clearer. It is easier to understand what they're doing.

---

### [`.forEach()`](https://www.w3schools.com/jsreF/jsref_foreach.asp)

The `.forEach()` method calls a function once for every element of the array.

<!-- Similar to forLoop -->

```js
// Example
const words = [
  "The",
  "large",
  "shaggy",
  "dog",
  "barked",
  "at",
  "the",
  "silence",
];

words.forEach(function (word) {
  //e.g forEach :
  // arr = ['apple', 'banana', 'carrot', 'durian', 'egg']
  //(5) ["apple", "banana", "carrot", "durian","egg"]
  // arr.forEach (function(item) {
  // console.log(item.slice(0, 2));
  // })
  // ap
  // ba
  // ca
  // du
  // eg
  // undefined
});

// Compare that to a for loop:
// forEach is very similar to for loop.
//e.g of for loop :
// for (let 1 = 0; i < arr.length; i++) {
//let item = arr [i]
//console.log[item.slice(0, 2)];
//}
//**Function here are more clear.
```

---

### [`.map()`](https://www.w3schools.com/jsreF/jsref_map.asp)

The `.map()` method calls the provided function once for every element in the array and returns _a new array with the result_.

```js
// Example
const words = [
  "The",
  "large",
  "shaggy",
  "dog",
  "barked",
  "at",
  "the",
  "silence",
];

const newWords = words.map(function (word) {
  return word.toUpperCase();
});
```

<!-- arr = [1, 2, 3, 4, 5]
(5) [1, 2, 3, 4, 5]
arr.map(function[item] {
  return item ** 2;
})
(5) [1, 4, 9, 16, 25]
arr
(5) [1, 2, 3, 4, 5]

//OR//
arr.map(function[item] {
  return item - 2;
})
(5) [-1, 0, 1, 2, 3]


**Produce new Array but with same
** Difference with filter vs map


-> Filter
Filter dosen't change the item it only produce subset. What less than the items. Don't want to change the item just want some of them. Filter a condition. Almost all case give a boolean.

const students = [
{ name: 'annie', grande: 94},
{ name: 'bernie', grade: 42},
{ name: 'caroline', grade: 85},
];
undefined
students.filter(function(student) {
  return student.grade < 60;
});
...
0: (name: "bernie, grade: 42)



-> Map
Map produce Array of same link but with different item

arr = [1, 2, 3, 4, 5]
arr.map(function[item] {
  return item - 2;
})
(5) [-1, 0, 1, 2, 3]

-->

---

### [`.find()`](https://www.w3schools.com/jsreF/jsref_find.asp)

The `.find()` method is like `filter`, except it returns the _first_ match.

<!-- Same as filter but return only a single thing -->

```js
// Example
const pizzas = [
  { name: "pepperoni", isVegetarian: false },
  { name: "all-dressed", isVegetarian: false },
  { name: "green pepper and onion", isVegetarian: true },
  { name: "smoked meat", isVegetarian: false },
  { name: "cheese", isVegetarian: true },
  { name: "sundried tomatoes", isVegetarian: true },
];

const somethingICanEat = words.find(function (pizza) {
  return pizza.isVegetarian;
});
```

---

### [`.every()`](https://www.w3schools.com/jsref/jsref_every.asp)

The `.every()` method checks if all elements in an array pass a test.

It returns `true` or `false`.

```js
// Example
const snacksInMyBackpack = [
  { name: "crackers", containsPeanuts: false },
  { name: "M&Ms", containsPeanuts: false },
  { name: "Lucky Charms", containsPeanuts: false },
  { name: "trail mix", containsPeanuts: true },
  { name: "grapes", containsPeanuts: false },
];

const canEnterSchool = snacksInMyBackpack.every(function (snack) {
  return snack.containsPeanuts === false;
});
```

<!-- Super useful -->
<!-- eg.
students
0: { name: 'annie', grande: 94, isOnHonorRoll: true}
1: { name: 'bernie', grade: 42, isOnHonorRoll: false}
2: { name: 'caroline', grade: 85, isOnHonorRoll: true}
let areAllStudentInHornorRoll;
undefined
for [let i = 0; 1< students.length; 1++] {
  let student = students [1];

  if [student.isOnHonorRoll === false] {
areAllStudentInHornorRoll = false;
  }
}
undefined

///

students.every(function[student] {
  return student.isOnHonorRoll;
})
false

OR
students.every(function[student] {
  return student.grade > 20;
})
true

 -->

```
students.every(function(student) {
  return student.isOnHonorRoll;
})
false
students
(3) [{...}, {...}, {...}]
student.every(function(student) {
  return student.grade > 20;
})
true
students.every(fucntion(student) {
  return student.grade > 70;
})
false
```
