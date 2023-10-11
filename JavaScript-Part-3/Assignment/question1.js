const arr = [7, 9, 0, -2];
let n = 3;
const newarr = [];
for(let i=0; i<arr.length; i++){
    if(arr[i] >= 0){
        newarr.push(arr[i]);
        if(newarr.length === 3){
            break;
        }
    }
}
console.log(newarr);
/// actual solution

 const array = [7, 9, 0, -2];
 let num = 3;
console.log(array.slice(0,num));