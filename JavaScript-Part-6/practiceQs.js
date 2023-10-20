function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("how I wonder what you are");
}

// printPoem()

function rollDice(){
    console.log(Math.floor(Math.random() * 6) + 1);
}

// rollDice();

// average of three number

function clcAverage(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

// clcAverage(3, 4, 5);

function printTable(a){
    for(let i=1; i<=10; i++){
        console.log(a*i);
    }
}
// printTable(5)

//sum of numbers from 1 to n 

function getSum(n){
    // let sum = 0;
    // for(let i=1; i<=n; i++){
    //     sum += i;
    // }
    let sum = (n*(n+1))/2
    return sum;
}

// console.log(getSum(10));

// 

function concat(str){
    let ans = "";

    for(string of str){
        ans += string;
    }
    return ans;
}

let str = ['hi', 'hello', 'bye', '!'];

console.log(concat(str));