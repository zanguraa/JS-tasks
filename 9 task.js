/*
Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300 
convert(3) ➞ 180 
convert(2) ➞ 120
*/

// my function:

function minutesToSeconds(n) {
    let convert = n * 60;
    return convert;
}

console.log(minutesToSeconds(5));
