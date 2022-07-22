/*
შექმენით ცვლადი რომელსაც კონსოლიდან მიანიჭებთ მნიშვნელობას, დაწერეთ სკრიპტი (კოდი, ლოგიკა) რომელიც ამოიღებს ამ მნიშვნელობიდან შუა წევრებს მაგალითად:
x ცვლადის მნიშვნელობა თუ იქნება "mac" (კენტი რაოდენობის ტექსტი) ამოიღებს "a" - ს, ხოლო თუ ცვლადის მნიშვნელობა იქნება "book" (ლუწი რაოდენობის ტექსტი) ამოიღებს "oo" ს.
გამოიყენეთ ჩაშენებული ფუნქცია len(ცვლადის სახელი) რომელიც ითვლის გადაცემული ცვლადის მნიშვნელობის სიგრძეს.
*/

function takeCenter(x) {
    
if (x.length % 2 == 0) {
let sum = x.length / 2 - 1;
    let sumX = x.length / 2 + 1;
    let take = x.substring(sum, sumX);
    return take;
} else {
    let sum = x.length / 2;
    let sumX = x.length / 2 + 1;
    let take = x.substring(sum, sumX);
    return take;
}
}
console.log(takeCenter("saqartvelo"));
