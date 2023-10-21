const arrayAvg = (ar) =>{
    let total = 0;
    for(let i=0; i<ar.length; i++){
        total += ar[i];
    }

    let avg = total/ar.length;

    return avg;
}

let arr = [1, 2, 3, 4, 5];
console.log(arrayAvg(arr));