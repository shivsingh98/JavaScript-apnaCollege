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