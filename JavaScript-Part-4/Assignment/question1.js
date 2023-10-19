let num = 2;
const arr = [1, 2, 3, 4, 5, 6, 2, 3];

for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
}

// for(num of arr){
//     console.log(num);
// }

console.log(arr);