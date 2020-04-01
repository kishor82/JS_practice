/*

Variables get moved to the top of their scope when your Javascript compiles at runtime 

*/
// console.log(myName);
// var myName = `sunil`;

// Same as 

// var myName;
// console.log(myName);
// myName = `sunil`;

/*

Functions are also hoisted to the top.
(right at the top, above where the variable declarations are hoisted)

*/

// function hey() {
//   console.log(`hey ${myName}`);
// }
// hey();

// var myName = 'sunil';

console.log('1a', myName1); // undefined
if(1) {
 console.log('1a', myName1); // undefined
 var myName1 = 'sunil';
}
console.log('2a', myName2); // error: myName2 is not defined
if (1) {
    console.log('2b', myName2); // undefined
    let myName2 = 'Sunil';
}
console.log('3a', myName3); // error: myName3 is not defined
if (1) {
    console.log('3b', myName3); // undefined
    const myName3 = 'Sunil';
}


