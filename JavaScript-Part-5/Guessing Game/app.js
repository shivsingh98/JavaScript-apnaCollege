
const max = prompt('enter the max number:');

console.log(max);
let random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt('guess the number?')
let hint = '';

while(true){
    if(guess == null || guess == 'quit'){
        alert('you quit the game');
    }

    if(guess == random){
        alert('yay!! you win')
        break;
    }else if(guess < random){
        guess = prompt('your guess was too small. please try again')
    }else{
        guess = prompt('your guess was too large. please try again')
    }
   
}