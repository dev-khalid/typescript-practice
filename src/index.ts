/**
 * @BASIC_TYPES 
 */
let n: number = 1; 
let s: string = 'some string'; 
let b: boolean = true; 
let a: Array<number> = [1,2,3,4]; 
let a2: number[] = [1,2,3,4,5];   
let t: [number,string]; 
t = [1,"khalid"]; 
console.log("Tuple",t); 
// let tArray: Array<[number,string]>; 
let tArray: [number,string][]; 
tArray = [
  [1,'khalid'],
  [2,'hossain'],
  [3,'akash']
]; 
console.log("Tuple Array",tArray); // i got the gest of c++ inside typescript . just loving it. 

enum Color { 
  Red, 
  Green, 
  Blue = 5, 
}
let e: Color = Color.Blue; 
console.log(Color[5]); //we can get the enum by value or key . key will return val and val will return key. 
let u: unknown; 
u = 5; 
console.log(typeof u); 
u = 'x'; 
console.log(u); 
// unknown can be anything . 

let an: any; 
an = 'x'; 
console.log(an); 
an = 5; 
an = true; 
console.log(typeof an); 

function fun(param: any): number {
  console.log(param); 
  return 0; 
}
fun("string hobe")

const fun2 = (): any => {
  console.log("just checking ... how to work with types . in an arrow function. "); 
}
fun2(); 

const fun3 = (param1: Array<number> | number | string): void => {
  console.log(typeof param1 , "union type . ", param1); 
}
fun3([1,2,3]); 

const fun4 = (param: number | boolean | string) => { // this function is automatically typed as void 
  console.log("Combined type")
}

//type casting 
let u2: unknown; 
u2 = 'k h a l i d'; 
let x: string = (<string> u2).split(' ').join(''); 
console.log(x); 