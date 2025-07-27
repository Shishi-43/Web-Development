// the prompt() can't be used in Node.js, so we use readline for input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a positive number: ', (number) => {
    function isEven(number){
        if (number < 0){
            console.log('Please enter a positive number');
        }else if(number === 0){
            return true;
        }else if(number === 1){
            return false;
        }else{
            return isEven(number - 2);
        }
    }
    console.log(isEven(number));
    readline.close();
});