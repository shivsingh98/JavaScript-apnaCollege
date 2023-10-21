//   this keyword

const student = {
    name: "Shiv Singh",
    age: 24,
    eng: 98,
    math: 94,
    phy: 88,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    } 
}

// console.log(student.getAvg());
// student.getAvg()

function getAvg(){
    console.log(this); // it will print window object
}

// getAvg()

// try & catch

// console.log(a); // error a is not defined

// console.log("hello");
// console.log("hello");
// // let a = 5;
// try{
//     console.log(a);
// }catch(error){
//     console.log(error);
//     console.log("Error : a is not defined");
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// arrow function

// const sum = (a, b) => console.log(a+b);
  
//   sum(2, 3); // calling

//   const cube = (n) =>  n*n*n;

//   console.log(cube(3));

//   const pow = (a, b) => a**b;

//   console.log(pow(2, 3));

// setTimeout()

console.log("hi there!");

// setTimeout( () =>{
//   console.log("justcoder.dev");
// }, 3000);
// let id = setInterval(() =>{
//     console.log("justcoder.dev")
//   }, 2000);
// console.log("Welcome to ");
// console.log(id);

// clearInterval(id)

