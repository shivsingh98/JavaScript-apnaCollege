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

// question

let str = 'apple';

if((str[0] === 'a') && (str.length > 3)){
    console.log('Yes, It is a good string');
}else{
    console.log('NO, It is not a good string');
}

//question

let num = 12;
if((num%3===0) && ((num+1 == 15) || (num-1 == 11))){
    console.log('safe');
}else{
    console.log('unsafe');
}

// question -- print day of the week

let day = 6;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('wrong input!!');
        break;
}