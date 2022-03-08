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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const sVowels = [];
    const sConsonants = [];
    for (const a of s) {
        if (vowels.includes(a)) {
            sVowels.push(a);
        } else {
            sConsonants.push(a);
        }
    }
    
    const final = sVowels.concat(sConsonants);
    console.log(final.join('\n'));
}

