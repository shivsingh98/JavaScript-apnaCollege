//question for the given string Trim it & convert it to uppercase.

let msg = "help!";
console.log(msg.trim().toUpperCase());

// Predict the output

let name = "ApnaCollege";

console.log(name.slice(4, 9)); // Colle
console.log(name.indexOf("na")); // 2
console.log(name.replace("Apna", "our")); // ourCollege

// Seprate the "College" part in the above string & replace "l: with 't' in it.

console.log(name.slice(4).replace("l", "t")); // Cotege

//question

let months = ['january', 'july', 'march', 'august'];

months.shift();
months.shift();
months.unshift('july', 'june');
console.log(months);