let msg = '    Hello   ';
console.log(msg);
console.log(msg.trim());


// let pass = prompt('set your password : ');
// let newPass = pass.trim();
// console.log(pass);
// console.log(newPass);

// let str = 'Random String';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf('o'));

let str = 'IloveCoding';

console.log(str.indexOf('love')); // 1
console.log(str.indexOf('J'));  // -1(not found)
console.log(str.indexOf('o'));  // 2(only 1 index)

let str1 = 'IloveCoding';

console.log(str1.lastIndexOf('love')); // 1
console.log(str1.lastIndexOf('J'));  // -1(not found)
console.log(str1.lastIndexOf('o'));  // 6


let str2 = '   IloveCoding';
console.log(str2);
console.log(str2.toUpperCase().trim());