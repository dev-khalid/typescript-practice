"use strict";
/**
 * @BASIC_TYPES
 */
let n = 1;
let s = 'some string';
let b = true;
let a = [1, 2, 3, 4];
let a2 = [1, 2, 3, 4, 5];
let t;
t = [1, "khalid"];
console.log("Tuple", t);
// let tArray: Array<[number,string]>; 
let tArray;
tArray = [
    [1, 'khalid'],
    [2, 'hossain'],
    [3, 'akash']
];
console.log("Tuple Array", tArray); // i got the gest of c++ inside typescript . just loving it. 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
let e = Color.Blue;
console.log(Color[5]); //we can get the enum by value or key . key will return val and val will return key. 
let u;
u = 5;
console.log(typeof u);
u = 'x';
console.log(u);
// unknown can be anything . 
let an;
an = 'x';
console.log(an);
an = 5;
an = true;
console.log(typeof an);
function fun(param) {
    console.log(param);
    return 0;
}
fun("string hobe");
const fun2 = () => {
    console.log("just checking ... how to work with types . in an arrow function. ");
};
fun2();
const fun3 = (param1) => {
    console.log(typeof param1, "union type . ", param1);
};
fun3([1, 2, 3]);
const fun4 = (param) => {
    console.log("Combined type");
};
//type casting 
let u2;
u2 = 'k h a l i d';
let x = u2.split(' ').join('');
console.log(x);
