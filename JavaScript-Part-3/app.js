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

    let num4 = [1, 2, 3, 4, 5];
    console.log(num4.shift()); // 4 --> deleted last element
    console.log(num4); // [2, 3, 4, 5]
    