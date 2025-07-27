const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter a text: `, (string) => {
    readline.question(`Enter a character to count: `, (char) => {
        function countBs(string, char){
            let counter = 0;
            for(let i = 0; i < string.length; i++){
                if(string[i] === char){
                    counter++;
                }
            }
            return counter;
        }
        console.log(`Number of ${char}: ${countBs(string, char)}`);
        readline.close();
    });
});