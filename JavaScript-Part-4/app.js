// printing number 1 to 5

console.log('printing number 1 to 5 :');

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// printing number 1 to 5 using for loop

console.log('printing number 1 to 5 using for loop :');

for(let i=1; i<=5; i++){
    console.log(i);
  } 

// print odd number from 1 to 15

console.log('print odd number from 1 to 15 :');

for(let i=1; i<=15; i++){ // here we can also update i=i+2
    if(i%2 !== 0){
        console.log(i);
    }
}
// print even number from 1 to 10

console.log('print even number from 1 to 15 : ');

for(let i=1; i<=15; i++){// here we can also start i=2 and update i=i+2
    if(i%2 === 0){
        console.log(i);
    }
}

// infinite loop
// console.log('infinite loop ::');

// for(let i=1; i>0; i++){
//     console.log(i);
// }

// for(let i=1; i<=5; i--){
//     console.log(i);
// }

// for(let i=1; ; i++){
//     console.log(i);
// }

// print Multiplication table of 5

console.log(`Multiplication table of 5 : `);

for(let i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5*i}`);
}

// Nested loop

console.log('Nested loop :');

for(let i=1; i<=5; i++){
    console.log(`Outer loop i=${i}`);
    for(let j=1; j<=5; j++){
      console.log(`i * j = ${i*j}`)
    }
  }

// print number 1 to 5 using while loop

console.log('number 1 to 5 using while loop : ');

// let i=1;
// while(i<=5){
//   console.log(i);
//   i++;
// }

// favorite movie

// let favorite = 'avatar';
// let guess = prompt('enter the movie name :');
// guess = guess.toLocaleLowerCase();

// while((guess != favorite) && (guess != 'quit')){
//     alert('wrong guess! try again please :');
//     guess = prompt('enter the movie name :').toLocaleLowerCase();
// }
// if(guess == 'avatar'){
//     alert('Congratulation');
// }else{
//     alert('Game end!')
// }

let i=1;
while(i<=5){
  if(i === 3){
    break;
  }
  console.log(i);
  i++;
}

// loop with array

let fruits = ["apple", "apple", "banana", "litchi", "orange"];

for(let i=0; i<fruits.length; i++){
  console.log(i, fruits[i]);
}

let marks = [[89, 98, 97], [87, 89, 92], [90, 96,87]];

for(let i=0; i<marks.length; i++){
  console.log(`marks of ${i+1} student`);
  for(let j=0; j<marks[i].length; j++){
    console.log(marks[i][j]);
  }

}

// for of loop

for(fruit of fruits){
  console.log(fruit);
}

for(char of 'apnacollege'){
  console.log(char);
}

// nested for of loop

for(student of marks){
  for(mark of student){
    console.log(mark);
  }
}