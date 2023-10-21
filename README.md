# JavaScript-apnaCollege

## Introduction
- **Console** uses REPL.
- <mark>REPL</mark> stands for Read-Evaluate-Print-Loop   
- **console.log()** used to print anything in console.   
- **Enter key** means return.   
- **Ctrl + L** to clear console. (ctrl + k) for mac    
  
## Variable  
**What is a <mark>Variable</mark>?**  
A variable is a simply the name of a storage location.   
![variable](./img/variable.png)  

## <mark>Data Types</mark> in JS

![datatypes](./img/datatypes.png)   

- **typeof()** returns the datatype of a variable/value.
```js
var a = 12;
var name = 'Shiv';
console.log(typeof a);
console.log(typeof name);
```

## Numbers in JS

- Positive (12) & Negative (-6).   
- Integers (45, -50)
- Floating numbers - with decimal (4.6, -8.9).

## Operations in JS

```js
a = 20
b = 10

//addition
sum = a + b

// subtraction
diff = a - b

// multiplication
prod = a * b

// division
div = a / b

// modulo
rem = a % b

// note : a and b are here operands and +, -, *, / is operators.These are binary operator.
```

- Modulo (remainder operator)   
      12 % 5 = 2   
- Exponentiation (power operator)    
      2**3 = 8

## NaN is JS

The NaN global property is a value representing <mark>Not-A-Number</mark>.   
- **typeof NaN** is a number.   
```js

    0/0 ==> NaN
    NaN - 1 ==> NaN
    NaN * 1 ==> NaN
    NaN + NaN ==> NaN

```

## Operator Precendence
This is the general <mark>order</mark> of solving an expression.

- ( )
- **
- *,/,%  left to right
- +, -   left to right

## let keyword
Syntax of declaring variables.  let comes in 2015
```js
Syntax :: let variableName = value;
let age = 23;
let name;
name = 'Shiv';
```

## const Keyword 

values of constants can't be changed with re-assignment & they can't be re-declared.   
```js
const year = 2023;
year = 2026; //(Error)
year = year + 1; //(Error)
const pi = 3.14;
const g = 9.8;
```

## var Keyword
Old syntax of writing variables
```js
    var age = 34;
```

## Comments
```js
    // comments
```

## Assignment Operators

=, +=, -=, *=, /=

## Unary Operators

- increment (++)  
  - Pre-increment (++x) {Change, then use}
  - Post-increment (x++) {Use, then change}
- decrement (--)
  - Pre-decrement (--x) {Change, then use}
  - Post-decrement (x--) {Use, then change}

## Identifier Rules
![identifier](./img/identifier.png)   

## camelCase
Way of writing identifiers

- camelCase (JS naming convention)
- snake_case
- PascalCase

## Boolean
Boolean represent a truth value -> true or false / yes or no

```js
  let age = 23;
  let isAdult = false;
```
## What is TypeScript?
Static Typed, where JS is dynamic typed.   
- Designed by Microsoft. 

## String
Strings are <mark>text</mark> or sequence of characters.

```js
  let name = 'Shiv Singh';
  let char = 'a';
  let num = '23';
  let empty = '';
  let ssentence = 'This is "apple"';
```

## String Indices
- index means position
```js
let name = 'SHIV SINGH';
S H I V _ S I N G H
_ _ _ _ _ _ _ _ _ _
0 1 2 3 4 5 6 7 8 9
name[0] -> 'S'
name[1] -> 'H'
it is called zero based indexing.
```
- to find the length of string we use .length property.

## Concatenation
Adding strings together.

```js
"tony" + " " + "stark" = "tony stark"
"tony" + 1 = "tony1"
```

## null & undefined in JS

**undefined**
A variable that has not been assigned a value is of type undefined.

```js
let a;
console.log(a); // undefined
```

## null 
The null value represents the intentional absence of any object value.    
To be explicitly assigned.

```js
  let a = null;
  console.log(a); // null
```

## console.log()
To write (log) a message on the console.

```js
  console.log('Just Coder');// Just Coder
  console.log(1234); // 1234
  console.log(2+2); // 4
  console.log('Just','Coder', 123); // Just Coder 123
```

## Linking JS File
```js
  <script src="app.js"></script>
```

## Template Literals
They are used to add embedded expressions in a string.
back tick (` ${exp}`)
```js
  let a = 5;
  let b = 10;
  console.log(`Your pay  ${a + b} rupees`);
  // console.log('Your pay', a + b, 'rupees')
```

## Operators in JS

- Arithmetic (+, -, *, /, %, **)  
- Unary (++, --)  
- Asssignment (=, +=, -=, *=, /=, %= etc.)   
- Comparison  (<, >, <=, >=, ==, !=, ===, !==)
- Logical  

## Comparison Operators
Comparison Operator to compare 2 values. It returns boolean value.
- <
- \>
- <=
- \>=
- ==
- !=
- ===
- !==

![equality](./img/equality.png)  
![equaality1](./img/equaality1.png) 

**Note :** have a look on JS unicode.

## Conditional Statements :
- if-else
- nested if-else
- switch

## if Statement 
```js
  // some code before if

  if(some condition){
  // Do something
  }
  // some code after if
```
```js
  console.log('Before my if statement');
let age = 21;
if(age >= 18){
    console.log('you can vote');
    console.log('you can drive');
}
console.log('after my if statement');
```

## else if Statement

```js
  if(condition1){
    //Do Something
  }else if(condition2){
    //Do Something
  }else if(condition3){
    //Do Something
  }else{
    //Do Something
  }
```

## Nested if-else

![nested-if-else](./img/nested-if-else.png)   


## Logical Operators:
![logicalAND](./img/logicalAND.png)  
```js
  // Logical Operators
  let marks = 86;

  if(marks >= 33 && marks >= 80){
    console.log('pass');
    console.log('A+');
  }  
```

## Logical OR (||)
```js
  let marks = 86;

  if(marks >= 80 || marks >= 33){
    console.log('pass');
  }
```
## Logical NOT
![logicalNOT](./img/logicalNOT.png)  
```js
  let marks = 86;

  if(!(marks > 33)){
    console.log('pass'); 
  }
```

## Truthy & Falsy

![truthy&falsy](./img/truthy&falsy.png)  

## Switch Statement

![switch](./img/switch.png)  

## Alert & Prompt

![alert&prompt](./img/alert&prompt.png)  

- prompt always return a string to convert string to number use `parseInt()` method.

```js
  alert('Hello!');
  console.error('this is an error');
  console.warn('this is a warning');
  console.log('this is an log');
```

## String Methods
**Methods -** action that can perform on objects.

**Format**   
`stringName.method()`   
## trim Method
- ### trim()
- ### trimStart()
- ### trimEnd()
![trim()](./img/trim.png)  
- trim() returns a new string It does not affect orignal string because Strings in JS are Immutable.  

```js
let str = '      Hello World!     ';
console.log(str.trimStart());// 'Hello World!      '
console.log(str.trimEnd());// '     Hello World!'
console.log(str.trim()); // 'Hello World!'
```

## Strings in JS are Immutable(means cant change)
- No changes can be made to strings.
- Whenever we do try to make a change, a new string is created and old one remains same.

## Uppercase
- It converts given string in to uppercase.   
`let str = "Random String;`      
`str.toUpperCase();` // RANDOM STRING   

## Lowercase
- It converts given string in to Lowercase.   
`let str = "Random String;`      
`str.toLowerCase();` // random string

## String Methods with Arguments : 
- Argument is a some value that we pass to the method.   
**Format**   
`stringName.method(arg)`

## indexOf() 
- Returns the <mark>first index of occurence</mark> of some value in string. or gives -1 if not found.

```js
  let str = 'IloveCoding';

  str.indexOf('love'); // 1
  str.indexOf('J'); // -1(not found)
  str.indexOf('o'); // 2(only 1 index)
```

## lastIndexOf()
- Returns the <mark>last index of occurence</mark> of some value in string. or gives -1 if not found.

```js
  let str = 'IloveCoding';

  str.lastIndexOf('love'); // 1
  str.lastIndexOf('J'); // -1(not found)
  str.lastIndexOf('o'); // 2(only 1 index)
```

## Method Chaining
- Using one method after another. Order of execution will be left to right.   

`str.toUpperCase().trim()`

## slice
- Returns a part of the original string as a new string.   
- `str.slice(start, end)` end = end -1; end index not included(non-inclusive)
- `str.slice(start)` it will assume end = str.length if you pass end > length, it will take till str.length
- if you pass -ve value it will replace str.length-value for eg: length is 11 and value is -2 so It will replace -2 with 11-2 which is 9.

```js
  let str = 'IloveCoding';
  str.slice(5); // coding
  str.slice(1, 4); // lov 
  str.slice(-num) = str.slice(length-num);  
```
## subString()


## replace
- Searches a value in the string & returns a new string with the value replaced.  
- It will replace only 1st occurence.
- here string should be same "apple" and "Apple" are different

```js
  let str = "ILoveCoding";
  str.replace("Love", "do"); // IdoCoding
  str.replace("o", "x"); // ILxvecxing
```

## repeat
- Returns a string with the number of copies of a string

```js
  let str = "Mango";
  str.repeat(3); // MangoMangoMango
```

## Array (Data Structure)
- Linear collection of things.
- to find the length of the array we use `.length` property.
- index starts from 0
- element can be of different types
- typeof Array is an object

![array](./img/array.png)  

`let arrayName = [ele1, ele2, ele3];`

```js
  let num = [1, 2, 3, 4, 5];

  console.log(num);
  console.log(num[4]);
  console.log(num.length);
  console.log(typeof num); // object
```
## Creating array

```js
  let num = [1, 2, 3, 4, 5];
  let names = ["adam", "bib", "riya"]; 
  let info = ["adam", 23, 6.1, true];  // mixed array

  // empty Array
  [] // is also an empty array
  let newArr = []; // [] -> length -> 0 --> newArr[0]--> undefined

   names[0][0] // ==> 'a'
   names[0].length // ==> 4
```

## Array Methods

### Push
- add element to the end/last index 
- It returns updated length of array
- you can pass more than one argument
```js
    let num = [1, 2, 3, 4, 5];
    console.log(num.push(7)); // 6 --> new/ updated length of array
    console.log(num); // [1, 2, 3, 4, 5, 7]
    console.log(num.push(8, 9, 11)); // 9 --> new/ updated length of array
```

### Pop
- deleted from end & return it
- it removes last element from the array 
- It returns deleted element

```js
    let num = [1, 2, 3, 4, 5];
    console.log(num.pop()); // 5 --> deleted last element
    console.log(num); // [1, 2, 3, 4]
    
```

### Unshift
- add to start
- It returns updated length of array
- you can pass more than one argument
```js
    let num = [1, 2, 3, 4, 5];
    console.log(num.unshift(7)); // 6 --> new/ updated length of array
    console.log(num); // [7, 1, 2, 3, 4, 5]
    console.log(num.unshift(8, 9, 11)); // 9 --> new/ updated length of array
    console.log(num); // [8, 9, 11, 7, 1, 2, 3,  4, 5]
```


### Shift
- delete from start & returns it
- it removes 1st element from the array 
- It returns deleted element

```js
    let num = [1, 2, 3, 4, 5];
    console.log(num.shift()); // 4 --> deleted last element
    console.log(num); // [2, 3, 4, 5]
    
```

## Array Methods
![array method](./img/array1.png)    
 
- all arguments are case sensitive.

## Concatination & Reverse
![concat](./img/concat.png) 
- If you want to concat or merge to arrays so we use **concat()** method. 
- This method basically merge two arrays and return a new array. It does not manipulate orignal array.
- **Syntax** - 
- `array1.concat(array2);`
- ```js
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];

    let arr3 = arr1.concat(arr2);
    console.log(arr3);
    console.log(arr2.concat(arr1)); // order matters here
```

- If you want to reverse an array, so we use **reverse()** method. 
- This method basically reverse the orignal array and return reversed 
  array.
- **Syntax** - 
- `array1.reverse();`
- ```js
    let arr1 = [1, 2, 3, 4];
    let arr3 = arr1.reverse();
    console.log(arr3);
    console.log(arr1); 
```



![slice](./img/slice.png)

- `slice yaani tukda`
- It returns copy of a particular portion of an array as a new array.
- **syntax** - `arr.slice(startIndex, endIndex)`
- `endIndex` is exclusive that means we do not include inding index. `endIndex-1`
- arguments are optional here.
- I you pass invalid arguments (like you have an array of length 3 and you are passing 5) here it will return an empty array `[]`.
- `console.log(colors.slice(6)); // []`
```js
  let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white']; 

  console.log(colors.slice());
  console.log(colors.slice(2));
  console.log(colors.slice(2, 3));
  console.log(colors.slice(-2)); // length - 2
  console.log(colors.slice(5));
```

## splice Method
![splice](./img/splice.png) 

- here we pass only startIndex not endEndIndex.
- delete count is optional you can write 0 here.
- splice modifies orignal array and returns an array.
- if we pass only starting index it will work same as slice(). refer eg1 in image.


## sort Method
- It sorts an array.
- `arr.sort()`
- for string it works very well but in case of numbers it doesn't.
- `let marks = [99, 89, 67, 42, 100];
console.log(marks.sort()); // [ 100, 42, 67, 89, 99 ]`
- It happens because it converst array elements into string first and after converting starts sorting.
- `arr.sort((a,b) => a-b)` ascending
- `arr.sort((a,b) => b-a)` descending

```js
let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white', 'black']; 
console.log(colors.sort()); // [
  'black',  'blue',
  'orange', 'pink',
  'red',    'white',
  'yellow'
]

let marks = [99, 89, 67, 42, 100];
console.log(marks.sort()); // [ 100, 42, 67, 89, 99 ]
```

## Array References 
- Reference means adress in memory.
```js
console.log('name' == 'name'); // true
console.log('name' === 'name'); // true
console.log([1] == [1]); // false
console.log([1] === [1]); // false
console.log([] === []); // false
``` 
- when array created in memory a refrence variable created.
- `let num = [1, 2, 3]` num store address of array not actual array
```js
  arr1 = [1];
  arr2 = [1];
  arr1 === arr2; // false because both arr1 and arr2 are storing different memory locations.
```
![reference](./img/reference.png) 
- here in the image arr is storing address of array and we assined arr to arrCopy so now arrCopy is also containing the same address. that's why when we push 'c' in arrCopy , arr will also update because both variable are reffering to the same array.

```js
  let arr = ['a', 'b', 'c'];
  let arrCopy = arr;
  console.log(arrCopy === arr ); // true

  arrCopy.push('d');
  console.log(arrCopy);
  console.log(arr);
```

## Constant Arrays :
```js
t a = 5;
 a = a+ 5;
 console.log(a);

const b = 5;
b = b+ 5;
console.log(b); // error : TypeError: Assignment to constant variable.

// butttttt.....
```
- when we make an array constant we can perform operations on the elements of that array(like we can increase length of that array) but we can not completely convert in to new array.

```js
  // we can do
  let arr = [1, 2, 3];
  arr.push(4);

  // we can not do

  arr = [5, 4, 6, 7]; // error : TypeError: Assignment to constant variable.
  // when we are making arr constant that's not mean that we are making array constant, it simply means we are making constant address of that array.after making arr constant address will be constant.

  let marks = [99, 89];
  arr = marks; // error TypeError: Assignment to constant variable.
```

## Nested Arrays :
![nestedArrays](./img/nestedArrays.png)  

- here length of nums is 3.
![nestedArrays1](./img/nestedArrays1.png) 
- `arr[row][column]`
- nums[1][2]; // undefined

- To print object in the table form
```js
 const ticTac = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
 console.table(ticTac);
┌─────────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │
├─────────┼──────┼──────┼──────┤
│    0    │ 'X'  │ null │ 'O'  │
│    1    │ null │ 'X'  │ null │
│    2    │ 'O'  │ null │ 'X'  │
└─────────┴──────┴──────┴──────┘

// Important
ticTac[0].splice(1, 1, 'O');
console.log(ticTac);
 console.table(ticTac);

┌─────────┬──────┬──────┬──────┐
│ (index) │  0   │  1   │  2   │
├─────────┼──────┼──────┼──────┤
│    0    │ 'X'  │ 'O'  │ 'O'  │
│    1    │ null │ 'X'  │ null │
│    2    │ 'O'  │ null │ 'X'  │
└─────────┴──────┴──────┴──────┘
```


# Loops
- used to iterate(repeat) a piece of code.

## For loop
```js
// syntax
for(initialisation; condition; updation){
  // do something
}

//example:
for(let i=1; i<=5; i++){
  console.log(i);
}
```

```js
// infinite loop
console.log('infinite loop ::');

for(let i=1; i>0; i++){
    console.log(i);
}

for(let i=1; i<=5; i--){
    console.log(i);
}

for(let i=1; ; i++){
    console.log(i);
}

```
## Nested Loop

```js
  for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
      console.log(`i * j = ${i*j}`)
    }
  }
```
## while loop

```js
// syntax

while(condition){
  // do something

  update // (++/--)
}

// example
let i=1;
while(i<=5){
  console.log(i);
  i++;
}
```

## break keyword
break terminat the execution of the loop immediately.

```js
let i=1;
while(i<=5){
  if(i === 3){
    break;
  }
  console.log(i);
  i++;
}
```

## Loops with Array

```js
let fruits = ["apple", "apple", "banana", "litchi", "orange"];

for(let i=0; i<fruits.length; i++){
  console.log(i, fruits[i]);
}
```
## Loops with Nested Arrays

```js
let marks = [[89, 98, 97], [87, 89, 92], [90, 96,87]];

for(let i=0; i<marks.length; i++){
  console.log(`marks of ${i+1} student`);
  for(let j=0; j<marks[i].length; j++){
    console.log(marks[i][j]);
  }
}
```

## for of Loop
```js
// syntax
for(element of collection){
  // do something
}

// example

let fruits = ["apple", "apple", "banana", "litchi", "orange"];

for(fruit of fruits){
  console.log(fruit);
}

for(char of 'justcoder'){
  console.log(char);
}
```

## Nested for of loop
```js
let marks = [[89, 98, 97], [87, 89, 92], [90, 96,87]];

for(student of marks){
  for(mark of student){
    console.log(mark);
  }
}
```

# TOdo App
![todo](./img/todo.png)  

```js
 let max = Number.MIN_VALUE;
 let min = Number.MAX_VALUE;
 ```



 # Object

 ## Object Literals

 - Object and Object literals are different.

 - used to store keyed collections & complex entities.

 ```js
 property => (key, value) pair

 // object are a collection of properties

 const person = {
  name : 'acb',
  age : 22,
  marks : 94.9
 };
 ```

 ## Creating Object literals

 ```js
 let delhi = {
  latitude : "28.7041 N",
  longitue : "77.1025 E"
 };

 const student = {
  name : 'shiv',
  age : 22,
  marks : 94.9
  city: 'lucknow'
 };
 ```

 ## Get Values
 1. `objectName.key` // using (.) dot operator
 1. `objectName["key"]`

 ```js
 const student = {
  name : 'shiv',
  age : 22,
  marks : 94.9
  city: 'lucknow'
  hobbies: ['reading', 'coding', 'sleeping']
 };

 console.log(student.name);  // using . operator
 // accessing array inside object
 console.log(student.hobbies[1]); // coding
 console.log(student["name"]);

 // we use [] to use variables, with . we cannot use variable
 ```

 - JS automatically converts objects keys to strings.
 - Even if we made the number as a key, the number will be converted to string.

 ```js
 const obj = {
  1: "a",
  2: "b",
  true: "C",
  null: "d",
  undefined: "e"
 };

 console.log(obj);

 // here all numbers and keyword are treated as string
 ```

 ## ADD/ Update Value
 ```js
 const student = {
  name : 'shiv',
  age : 22,
  marks : 94.9
  city: 'lucknow'
  hobbies: ['reading', 'coding', 'sleeping']
 };

// here changing city to mumbai
student.city = "mumbai";
console.log(student.city)// mumbai

// adding new property

student.isAdult = true;
console.log(student.isAdult); // true

// here we can also update different type of data like number -> string
 
 ```

## Deleteing property

`delete objectName.key`
```js
delete student.name; // it will return boolean value true/false
```
 ## Nested Object
- Storing information of multiple students.

 ```js
const classInfo = {
  aman: {
    grade: 'F',
    city: "Delhi",
  },
  shiv: {
    grade: 'A+',
    city: "Lucknow",
  },
  Ravi: {
    grade: 'A',
    city: "Sitapur",
  }
};

  console.log(classInfo.aman.grade);
 ```


 ## Array of Object
- Storing information of multiple students.

 ```js

    const classInfo1 = [
        {
          name: 'aman',
          grade: 'F',
          city: "Delhi",
        },
         {
          name: 'Ravi',
          grade: 'A+',
          city: "Lucknow",
        },
         {
          name: 'Ravi',
          grade: 'A',
          city: "Sitapur",
        }
    ];

      console.log(classInfo1);
      classInfo1[2].city = "Lucknow";
      console.log(classInfo1);
      console.log(classInfo1[1].name);
 ```

# Math Object
- Collection of mathematical properties and methods.  
![Math](./img/Math.png)   
- `Math.floor(-3.3)` // -4 nearest smallest Integer value
- `Math.floor(-3.3)` // -3 nearest larger Integer value

- Math.random() provide 0 to 1 exclusive. between 0 to 1
![random](./img/random.png) 

# Function 
- Function is a block of code which perform some task.
```js
example:

console.log();
arr.push();
.pop();
```
- Function Definition (telling JS)
```js
function funcName(){
  // do something
}

// example

function hello(){
  console.log("Hi, Good Morning!")
}
```

- Function calling (Using the function)
```js
  funcName();
  // example
  hello();
```

## Function with Arguments
- Values we pass to the function

```js
function funcName(arg1, arg2...){
  //do something 
}

// example
function greet(name){
  console.log(`Hi ${name}, How are you?`);
}

// calling function
greet('Ajeet')

- you can pass multiple parameter in a function
- if function is taking an argument and are not passing any parameter it will pass undefined.

function greet(name, age){
  console.log(`Hi ${name}, How are you? and you age is ${age}`);
}

function sum(a, b){
  console.log(a+b);
}

sum(3, 4)
```

## Function with return keyword

![return](./img/return.png) 

```js
// Unreachable code because return keyword terminate the function execution
function sum(a, b){
    return a+b;
    console.log("function end");
}

return keyword returns single value.
```

## What is Scope?

- scope determines the accessibility of variables, objects, and functions from different parts of the code.

- Function scope
- Block scope
- Lexical
- Global scope

### Function scope
variables defined inside a function are not accessible (visible) from outside the function.

```js

function calSum(a, b){
  let sum = a+b; // Function scope
}

console.log(sum); // error : sum is not defined
```
```js
let sum = 12; //Global scope
function calSum(a, b){
  let sum = a+b; // Function scope
}

console.log(sum); // 12

// Function scope is more spacific than global scope
```

### Block Scope
Variables declared inside a {} block cannot be accessed from outside the block.
```js
{
  let a = 20;
}
console.log(a); // a is not defined

// but if you use var instead of let const it will give result because var has global scope

```

### Lexical Scope

a variable defined outside a function can be accessible inside another function defined after the variable declaration.

The opposite is not true.

```js
function outerFunc(){
    let x = 5; 
    let y = 6;

    function innerFunc(){ // we can not use/call innerFunc out side of the outer function because it has function scope that's why we are calling inside outerFunc. 
        let a = 10;
        console.log(x);
        console.log(y);
    }
    console.log(a); // error : a is not defined
    innerFunc()
}

outerFunc()
```
## Function Expression
```js
//syntax :

const variable = function(arg1, arg2..){
  // do or return something
}

//example

const sum = function(a, b){
  return a+b;
}
sum(2, 3); // 5
```

## Higher Order Functions

A Function that dose one or both:
- takes one or multiple functions as arguments
- returns a function
```js

function multipleGreet(fnc, count){ // higher order function
    for(let i=1; i<=count; i++){
      fnc();
    }
  }
  let greet = function(){
    console.log("hello");
  }
  
  multipleGreet(greet, 10)
  multipleGreet(function(){console.log("namaste")}, 10000)
```

## Higher Order Functions
Returns a function
- factory function is a function which produce the function

```js
  function OddEvenTest(request){
    if(request == "odd"){
      return function(n){
        console.log(n%2!==0);
      }
    }else if(request == "even"){
      return function(n){
        console.log(n%2===0);
      }
    }else{
      console.log("wrong request");
    }
  }

  console.log(OddEvenTest('odd'));

  let func = OddEvenTest('odd');
  console.log(func(3));

```

## Methods

Action that can be performed on an object.
- The function which are defined inside a object is called method.

```js
  const calculator = {
    num : 55,
    add: function(a, b){
      return a+b;
    },
    sub: function(a, b){
      return a-b;
    },
    mul: function(a, b){
      return a*b;
    }
  };
```

# this Keyword

"This" keyword refers to an object that is executing the current piece of code.

```js
const student = {
    name: "Shiv Singh",
    age: 24,
    eng: 98,
    math: 94,
    phy: 88,
    getAvg(){
        console.log(this); // it will print entire object
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    } 
}

student.getAvg(); // if you write eng instead of this.eng in getAvg method it will give error- RefferenceError: eng is not defined, because our method inside object canot access parameter directly. that's why we write "this" here because this refers to the current object. this means calling object.

function getAvg(){
    console.log(this); // it will print window object
}

getAvg()

// window object is a higher level object.
// window.alert();
```

# try & catch

- The try statements allows you to define a block of code to be tested for errors while it is being executed. try throws the error.
- The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. catch caught the errors

```js
// syntax

try{
  //
}catch(err){
  //
}
```

```js
// console.log(a); // error a is not defined

console.log("hello");
console.log("hello");
// let a = 5;
try{
    console.log(a);
}catch(error){
    console.log(error);
    console.log("Error : a is not defined");
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// if you write only try it will through errer : SyntaxError: Missing catch or finally after try 
```

# Arrow Functions
```js
const func = (arg1, arg2...) => {function defination}

// example

const sum = (a, b) => {
  console.log(a+b);
}

sum(2, 3); // calling
arrow functions are nameless functions.
If there are only one stmt , you can ignore {} and return. This is called implicit return means automatic return.

const func = (arg1, arg2..) => value;

But () compulsory
```


# setTimeout(function, timeout)

```js
syntax:

setTimeout(fun, time); // 

console.log("hi there!");

setTimeout( () =>{
  console.log("justcoder.dev");
}, 5000);
console.log("Welcome to ");

after completing whole program setTimeout will execute.
```

# Set Interval

`setInterval(function, timeout)`

```js

let id = setInterval(() =>{
  console.log("justcoder.dev")
}, 3000);

to stop the set interval we use clearInterval() and pass the id.

clearInterval(id);

```


# this with Arrow Functions :

this keyword behavies differently with arraow functions.
- for normal functions scope of this depends on calling objects. but for arrow function depends on Lexical scope(parent scope).