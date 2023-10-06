// traffic light system using if

// let color = 'red';

// if(color == 'red'){
//     console.log('Stop!!');
// }
// if(color == 'yellow'){
//     console.log('Slow Down!');
// }
// if(color == 'green'){
//     console.log('You can Go!');
// }

// traffic light system using else-if

let color = 'green';

if(color == 'red'){
    console.log('Stop!!');
}else if(color == 'yellow'){
    console.log('Slow Down!');
}else if(color == 'green'){
    console.log('You can Go!');
}else{
    console.log('Enter correct color!!');
}

// question 2 popcorn prices

let size = 'M';

if(size === 'XL'){
    console.log(`Price is Rs. 250`);
}else if(size === 'L'){
    console.log(`Price is Rs. 200`);
}else if(size === 'M'){
    console.log(`Price is Rs. 100`);
}else{
    console.log(`Price is Rs. 50`);
}