// let msg = '    Hello   ';
// console.log(msg);
// console.log(msg.trim());


// let pass = prompt('set your password : ');
// let newPass = pass.trim();
// console.log(pass);
// console.log(newPass);

// let str = 'Random String';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf('o'));

// let str = 'IloveCoding';

// console.log(str.indexOf('love')); // 1
// console.log(str.indexOf('J'));  // -1(not found)
// console.log(str.indexOf('o'));  // 2(only 1 index)

// let str1 = 'IloveCoding';

// console.log(str1.lastIndexOf('love')); // 1
// console.log(str1.lastIndexOf('J'));  // -1(not found)
// console.log(str1.lastIndexOf('o'));  // 6


// let str2 = '   IloveCoding';
// console.log(str2);
// console.log(str2.toUpperCase().trim());

// let str3 = 'IloveCoding';

// console.log(str3.slice(6, 12)); // 1
// console.log(str3.slice(1, 4));  // -1(not found)
// console.log(str3.slice(-2));  // 11-2 = 9 ==> str.slice(9) ==>ng

// let str4 = 'IloveCoding';

// console.log(str4.replace("love", "do")); // IdoCoding
// console.log(str4.replace("o", "x"));  //ILxveCoding

// console.log(str4.repeat(4)); // IloveCodingIloveCodingIloveCodingIloveCoding

// let num = [1, 2, 3, 4, 5];

// console.log(num.length);
// console.log(num);
// console.log(num[4]);

// let num1 = [1, 2, 3, 4, 5];
//     console.log(num1.push(7, 8, 9)); // 6 --> new/ updated length of array
//     console.log(num1); // [1, 2, 3, 4, 5, 7]

//     let num2 = [1, 2, 3, 4, 5];
//     console.log(num2.pop()); // 5 --> deleted last element
//     console.log(num2); // [1, 2, 3, 4]

    // let num3 = [1, 2, 3, 4, 5];
    // console.log(num3.unshift(7)); // 6 --> new/ updated length of array
    // console.log(num3); // [7, 1, 2, 3, 4, 5]
    // console.log(num3.unshift(8, 9, 11)); // 9 --> new/ updated length of array
    // console.log(num3); // [8, 9, 11, 7, 1, 2, 3,  4, 5]

    // let num4 = [1, 2, 3, 4, 5];
    // console.log(num4.shift()); // 4 --> deleted last element
    // console.log(num4); // [2, 3, 4, 5]

    // console.log(num4.indexOf(-2));
    // console.log(num4.includes(51));
    

    // let arr1 = [1, 2, 3, 4];
    // let arr2 = [5, 6, 7, 8];

    // let arr3 = arr1.concat(arr2);
    // console.log(arr1);
    // console.log(arr3);
    // console.log(arr2.concat(arr1));
    // console.log(arr2);

    // let arr4 = arr1.reverse();
    // console.log(arr4);
    // console.log(arr1);

// let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white', 'black']; 

// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2, 3));
// console.log(colors.slice(-2));
// console.log(colors.slice(a8));

// console.log(colors.sort());

// let marks = [99, 89, 67, 42, 100];
// console.log(marks.sort()); // [ 100, 42, 67, 89, 99 ]

// console.log('name' == 'name'); // true
// console.log('name' === 'name'); // true
// console.log([1] == [1]); // false
// console.log([1] === [1]); // false

// let arr = ['a', 'b', 'c'];
// let arrCopy = arr;
// console.log(arrCopy === arr ); // true

// arrCopy.push('d');
// console.log(arrCopy);
// console.log(arr);

let a = 5;
 a = a+ 5;
 console.log(a);
const b = 5;
//  b = b+ 5;
 console.log(b); // error : TypeError: Assignment to constant variable.

 const arr = [];
 let marks = [99, 89];

//  arr = marks;

//  let nums = [ [2, 1], [3, 4], [4, 5]];
//  console.log(nums[0]);
//  console.log(nums[0][2]);

//  const ticTac = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
//  console.table(ticTac);
//  ticTac[0].splice(1, 1, 'O');
//  console.log(ticTac);
//  console.table(ticTac);

 let colors = ['red', 'yellow', 'blue', 'orange', 'pink', 'white', 'black']; 
 console.log(colors.splice(5));
 console.log(colors);
 