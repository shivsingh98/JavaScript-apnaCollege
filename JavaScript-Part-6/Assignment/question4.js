let str = "Shiv Singh a e i o u"
let count = 0;
str = str.toLocaleLowerCase();
    for(let i=0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        count ++;
    }

    console.log(count);
