<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined` ?

<i>This error occurs because of a typographical mistake in the code. JavaScript is a case-sensitive language, meaning that variable names must be spelled and capitalized exactly as they are defined. In the code you provided, "greetign" is used instead of "greeting," so when you try to access or log "greetign," JavaScript cannot find any variable with that name, leading to a ReferenceError.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `TypeError` ?

<i>In the code provided, the sum function takes two parameters` a` and b and attempts to add them together. However, when the function is called with sum(1, "2"), JavaScript tries to add a number (1) to a string ("2"). This is a type mismatch, and it results in a TypeError because JavaScript cannot perform arithmetic operations between different data types.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `['🍝', '🍕', '🍫', '🥑', '🍔']` ?

<i>Initially, an array food is declared with four elements.
Then, an object info is created with a property named favorite Food (note the space) and assigned the value of the first element of the food array, which is "🥑".
Next, the code attempts to set a new property favoriteFood (note the absence of space) in the info object with the value "🍝".
Finally, console.log(food) is called, which outputs the food array, resulting in the array ["🍝","🥑","🍉","🍞","🍎"] because the favoriteFood assignment has effectively replaced the original "🥑" value in the info object with "🍝"</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`?

<i>In the provided function, the sayHi function expects a name parameter to be passed when it is called. However, when you call sayHi() without providing an argument, the name parameter remains undefined. The string returned by the function includes the ${name} placeholder, which is not replaced with an actual name because name is undefined in this context. As a result, the function returns "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3?

<i>In this code, the forEach loop iterates through the nums array and checks each element num. The condition if (num) evaluates to true for every element except 0, so it increments the count variable for each non-zero element. Since there are three non-zero elements in the nums array (1, 2, and 3), the count variable becomes 3, and that's what's logged to the console.</i>

</p>
</details>