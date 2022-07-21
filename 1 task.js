
// Posted Jul 18 (Edited Jul 19)
// Assigned
// მოცემულია სია იგივე მასივი

// sia = ["abc", "d", "efghi", "j", "klmnop", "qr","st","uv","wxyz"]

// დავალება:

// სიის იგივე მასივის გამოყენებით ააწყვეთ თქვენი სახელი და გვარი,
// რის შემდეგაც დაბეჭდეთ მხოლოდ თქვენი სახელის ბოლო ორი ხოლო თქვენი
// გვარის პირველი სამი ასო ერთად.
// ასევე შექმენით 3 ცვლადი რომლიდანაც 2 ს კონსოლიდან(readLine(prompt)) მიანიჭებთ
// მნიშვნელობას შედეგად სამივეს დაამატებთ sia ში push ის დახმარებით
// და დაბეჭდავთ.

// hint:
// sia[0][0] = "a"

sia = ["abc", "d", "efghi", "j", "klmnop", "qr","st","uv","wxyz"];

let text = sia.toString();
let v = text.slice(28, 29);
let a = text.slice(0, 1);
let l = text.slice(15, 16);
let e = text.slice(6, 7);
let r = text.slice(22, 23);
let i = text.slice(10, 11);

let z = text.slice(33, 34);
let n = text.slice(17, 18);
let g = text.slice(8, 9);
let u = text.slice(27, 28);
let nameSurname = v.concat(a, l, e, r, i, " ", z, a, n, g, u ,r ,i);
let name = nameSurname.substring(4, 6);
let surName = nameSurname.substring(7, 10);
let some = "abg";
let some1 = prompt("enter some letters");
let some2 = prompt("more letters");
sia.push(some);
console.log(sia);




console.log()

console.log(`my name's last two char is: "${name}"" and my surnames's first three char is: "${surName}"`);

/////////////////////////////////////



