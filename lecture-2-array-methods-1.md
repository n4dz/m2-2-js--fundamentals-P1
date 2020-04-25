# 2.2.2 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
<!-- Useful method on array
arr.concat (arr2) -->
- `.join()`
<!-- combinedArray
[1,2,3,4,5,6]
"123456"
combinedArray.join()
"1, 2, 3, 4, 5, 6"
combinedArray.join(' ')
"123456"
combinedArray.join('-')
"1-2-3-4-5-6"
combinedArray.join(' and ')
"1 and 2 and 3 and 4 and 5 and 6"
join used to split -->

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ["think", "dream", "learn", "write"];
const arrayTwo = ["thought", "dreams", "knowledge", "truth"];

let newArray = arrayOne.concat(arrayTwo);
```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example
const lexicon = [
  "The",
  "large",
  "shaggy",
  "dog",
  "barked",
  "at",
  "the",
  "silence",
];

let sentence = lexicon.join();
```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
2. `.indexOf()`, `.push()`

The push() method adds new items to the end of an array, and returns the new length.

<!-- The indexOf() method searches the array for the specified item, and returns its position. -->

<!-- let houseItems = ['pot', 'pan', 'colander']
undefined
houseItems.push ('TV')
4
houseItems
(4) ['pot', 'pan', 'colander', 'TV']  -->

3. `.pop()`, `.sort()`
   <!-- let arr = ["apple", "orange", "banana"];
   let arr2 = arr.sort();
   console.log(arr2);
   let arr3 = arr2.pop();
   console.log(arr3) -->

   <!-- * pop * opposite of push, remove last item from array and present it to the developper in console.log-->

   <!-- arr = [4, 6, 2, 7, 1, 5, 4]
   (7) [4, 6, 2, 7, 1, 5, 4]
   arr.sort()
   (7) (7) [1, 2, 4, 4, 5, 6, 7]
   //
   arr = ['carol', 'amy', 'beatrice']
   (3) ["carol", "amy", "beatrice"]
   arr.sort()
   (3) ["amy", "beatrice", "carol"]
   arr
   (3) ["amy", "beatrice", "carol"]
    -->

4. `.shift()`, `.unshift()`
<!-- The shift() method removes the first item of an array. -->

<!-- The unshift() method adds new items to the beginning of an array, and returns the new length. -->

5. `.reverse()`, `.lastIndexOf()`
<!-- The reverse() method reverses the order of the elements in an array. -->

<!-- The lastIndexOf() method searches the array for the specified item, and returns its position. -->

6. `.splice()`, `.toString()`

<!-- The splice() method adds/removes items to/from an array, and returns the removed item(s).-->
<!-- eg
arr = [1, 2, 3, 4, 5]
(5) [1, 2, 3, 4, 5]
arr= ["apple", "banana", "carot", "durian", "eggs"]
(5) ["apple", "banana", "carot", "durian", "eggs"]
arr.splice(2, 1, "cucumber")
["carot"]
arr
(5) ["apple", "banana", "cucumber", "durian", "eggs"] -->

<!-- The toString() method returns a string with all the array values, separated by commas. -->

- Split into teams.
- Take given methods

  - find an explanation/definition, then write your own.
  - create two examples of each method in use. Be creative. 😛

  <!-- const arr1 = ["hello", "hi]
  conts arr2 = ["goodbye", "farewell"]
  undefined
  arr1.concat(arr2).join(' - ')
  "hello - hi - goodbye - farewell" -->

---

  <!-- The pop() method removes  the last element of an array, and returns that element.

  e.g var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.pop(); -->

---

  <!-- The sort() method sorts an array alphabetically 
  
  e.g var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();-->

---
