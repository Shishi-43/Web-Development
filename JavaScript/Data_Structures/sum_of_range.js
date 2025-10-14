const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter set of numbers to sum (comma separated): ', (number) => {
    let sumOfRange = 0;
    function sum(numbers){
        for(let i = 0; i < numbers.length; i++){
            sumOfRange += Number(numbers[i]);
        }
        return sumOfRange;
    }
    const numbersArray = number.split(',');
    console.log(`Sum of the range: ${sum(numbersArray)}`);
    readline.close();
});