// Reducing an array of values

// const total= (arr) => {
//   let result = 0;
//   arr.forEach(element => {
//     result += element
//   });
//   return result
// }

const total = (arr) => arr.reduce((result, num) => result + num);

console.log(total([1, 2, 3, 4])); // 10

const arr = ['x', 'y', 'z', 'z']; // I want: { x: 1, y: 1, z: 2 };

//with forEach:

// const counts = (arr) => {
//   const result = {};
//   arr.forEach((item) => {
//     result[item] ? result[item]++ : result[item] = 1;
//   });
//   return result;
// }

//with reduce :

const counts = (arr) => arr.reduce((result, item) => {
  result[item] ? result[item] += 1 : result[item] = 1
  return result;
}, {});

//code golf piece

// const count = (arr) => arr.reduce((acc, val)=>{
//   return {...acc, [val]: acc[val] ? acc[val] +1 : 1};
// },{});


console.log('.....')
console.log(count(['x', 'y', 'z', 'z']));

