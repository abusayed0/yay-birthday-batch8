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

#### Answer: A.`{}`

<i>Here assigning value to greetign which is not declared. In this case first javascript will create an global variable with the name implicitly, then will assign the value. We will find that variable in window object. So console.log(greetign) will give output : {}.</i>

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

#### Answer: C.`"12"`

<i>In javascript + operator is used to add two number or concatenate two string.If use it to add a number with a string it will convert the number into string implicitly. Then concanate them. Here parameter a is number but parameter b is string, so sum funciton wil return "12".</i>

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

#### Answer: A.`['🍕', '🍫', '🥑', '🍔']`

<i>Here food object first index element assigned to info object's property favoriteFood value. later changed the value of favoriteFood. Since there is no refference between food and favoriteFood, so changing favoriteFood value will not effect food array.</i>

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

#### Answer: B.`Hi there, undefined`

<i>sayHi function take a parameter and return a string by adding a greet message with name. Here sayHi function is called without parameter. In javascript if you don't pass any parameter to a function the parameter value will be undefined. So output of sayHi() will be option B.</i>

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

#### Answer: C.`3`

<i>Array.forEach() method loop through an array and execute the call back funtion inside it for each element. Here forEach method is called for nums array so the callback function will be executed 4 times since nums has 4 element. the callback function increase count value 1 if nums element is truthy. nums 3 element is truthy(0 is falsy) so 1 will be added with count for 3 times and the initail value of count was 0.So console.log(count) output will be 3.</i>

</p>
</details>
