//Objects
let obj={
    name:"Cipher"
}
console.log(obj);
person['counnn']='australia';   // cannot access
let person={
    name:'john',
    email: 'john@wich.com',
    age: 45,
    status: true,
    children:{
        name:'jay'
    },
    hobbies:['Reading','Writing',true,100,null] //array
}
let clickedName='name';
console.log(person[clickedName]); //!=== person.clickedName
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(typeof person.name);
console.log(person['age']); //===person.age
console.log(person.children);
console.log(person['children']);
console.log(person.clickedName); //=== undefined 
// console.log(person);
// person.country='India';
// console.log(person);
// person['cou']='australia';
// console.log(person);
console.log(person);  // can access cou
person['cou']='australia';
console.log(typeof person.hobbies);
console.log(typeof null);
console.log(year);  //cannot access
let year=100;
