const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a start of the range:', (start) => {
    readline.question('Enter an end of the range:',(end) =>{
        function  range(start,end){
            let array = [];
            for(let i= Number(start); i<= Number(end); i++){
                array.push(i);
            }
            return array;
        }
        console.log(`Range from ${start} to ${end}: ${range(start, end)}`);
        readline.close();
    })
})