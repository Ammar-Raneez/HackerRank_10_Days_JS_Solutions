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

function getLetter(s) {
    let letter = s[0];
    // Write your code here
    // switch (letter) {
    //     case ['a', 'e', 'i', 'o', 'u'].includes(letter):
    //         return 'A';
    //     case ['b', 'c', 'd', 'f', 'g'].includes(letter):
    //         return 'B';
    //     case ['h', 'j', 'k', 'l', 'm'].includes(letter):
    //         return 'C';
    //     case ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'].includes(letter):
    //         return 'D';
    // }
    if (['a', 'e', 'i', 'o', 'u'].includes(letter)) {
        return 'A';
    }
    if (['b', 'c', 'd', 'f', 'g'].includes(letter)) {
        return 'B';
    }
    if (['h', 'j', 'k', 'l', 'm'].includes(letter)) {
        return 'C';
    }
    if (['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'].includes(letter)) {
        return 'D';
    }
    // return letter;
}

