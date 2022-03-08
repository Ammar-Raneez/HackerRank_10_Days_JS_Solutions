'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function getMaxLessThanK(n, k) {
    let highestVal = 0;
    
    for (let a=1; a<=n; a++) {
        for (let b=2; b<=n; b++) {
            let bitwiseVal = a&b;
            if (b>a && bitwiseVal < k && bitwiseVal > highestVal)  {
                highestVal = bitwiseVal;
            }
        }
    }
    
    return highestVal;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}