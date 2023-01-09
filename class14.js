console.log("Hello world")


//Syntax and declaration
var score = 10;   //E55 - Ecma
var result = 50;  // E56 - Ecmascript 2015
const P1= 3.14 //E56

score = 15;
result=55;
// P1=3.26;  connot change

console.log(score);
console.log(result);
console.log(P1);

/**
 * Datatypes
 * 1.Number
 * 2.Strings
 * 3.Boolean
 * 4.Null
 * 5.Undefined
 * 6.Objects
 * 7.Symbols(es56)
 * Loosely Type*/
let sc =10; // number
let re ="10"; //String
//BEDMAS  BODMASS
let finalscore=sc+re; // Concatenating
let finalscores=sc-re; // Mathematical
// let totalGames=5;
let totalGames="five";
let avgscore= finalscore/totalGames;
console.log(sc,re) ;
console.log(finalscore) ;
console.log(finalscores) ;
console.log(avgscore) ;

//typeof
console.log(typeof finalscore);
console.log(typeof finalscores);
console.log(typeof avgscore);

let value=(finalscore**2)*10/(finalscores+totalGames);
console.log(value);
console.log(typeof value); // value = NAN(not a number)
