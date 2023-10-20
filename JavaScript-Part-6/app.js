function hello(){
    console.log('Hello');
}
// hello();
// hello();
// hello();
// hello();
// hello();

function printName(){
    console.log('Just Coder');
    console.log('Shiv Sing');
}

// printName()

function print0to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
// print0to5();

// function with arguments
// function greet(name, age){
//     console.log(`Hi ${name}, How are you? and you age is ${age}`);
//   }
  
  // calling function
//   greet('Ajeet')
//   greet()
  
// function sum(a, b){
//     return a+b;
// }

// let ans = sum(2,sum(4, 6));
// console.log(ans);

function calSum(a, b){
    let sum = a+b;
  }
  
//   console.log(sum);

function outerFunc(){
    let x = 5; 
    let y = 6;

    function innerFunc(){
        let a = 10;
        console.log(x);
        console.log(y);
    }
    // console.log(a);
    innerFunc()
}

// outerFunc()

// let greet = "hello"; // global scope

function changeGreet(){
    let greet = "namaste"; // Function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet); // Lexical scope
    }
    innerGreet();
}

// console.log(greet);
// changeGreet();

function multipleGreet(fnc, count){ // higher order function
    for(let i=1; i<=count; i++){
      fnc();
    }
  }
  let greet = function(){
    console.log("hello");
  }
  
  multipleGreet(greet, 10)
  multipleGreet(function(){console.log("namaste")}, 1000)

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

  console.log(calculator.num);
  console.log(calculator.add);
  console.log(calculator.add(1, 7));