//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.


//my function:

function convert (hour, minutes) {
    let minuteToSecond = minutes * 60;
    let hourToSecond = hour * (60 * 60);
    let sum = hourToSecond + minuteToSecond;
    return sum
}

console.log(convert(1, 0));
