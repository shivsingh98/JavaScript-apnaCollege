let max = Number.MIN_VALUE;
let arr = [1,2,3,4,66,44,333,23];

for(num of arr){
    if(num > max){
        max = num;
    }
}

console.log(max);