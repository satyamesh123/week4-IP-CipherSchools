
// E55- functionally scoped(var)
//es6-block scoped (let const)

// Scoping
// var abc=10;
// function testing(){
//     var abc =20;
//     let def =100;
//     console.log(abc);
//     // Block scope
//     if(1){
//         var xyz = "block scoped";
//         console.log("inside if ",xyz);
//         console.log(abc);
//     }
//     console.log("outside if",xyz);
// }
// testing();  // Calling a function
// console.log(abc);

var name = "Cipher";
var year =2020;  // Global Scoped
function test(){
    console.log(name);
    console.log(year);
}
test();

// Function Declaration and function Expression
//Hoisting
myFunc();
// myFunc2();
function myFunc(){
    console.log("Inside myFunc Declaration");
}
myFunc();
// function expressions
let myFunc2 = function(){
    console.log("Inside my Func2: function expressions")
}
myFunc2();
// name();  
 var name=function(){
    console.log('hello');
 }
 // Arrow Functions
 //this - context
 let newFunc = ()=>{
    console.log('Arrow Functions Created ');
    console.log(this);
 }
 newFunc();
 let funcExp = function(){
    console.log('Function expression Created');
    console.log(this);
 }
 funcExp();
 // for one line
 let newf=()=> console.log("Hello");
 newf();
 let newFunct = (na)=>{  //Parameter
    console.log('Arrow');
    console.log(na);
 };
 newFunct('Cipher'); //argument
