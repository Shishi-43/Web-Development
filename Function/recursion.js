let number = prompt("Enter a postive number: ");

function isEven(number){
    if (number < 0){
        console.log('Please enter a positive number');
    }else if(number%2 ===0){
        return true;
    }else{
        return false;
    }
}