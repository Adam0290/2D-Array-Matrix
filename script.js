
// 2d Array matrix >>> 2D means that the array consists of rows and columns. //

let _2darr = [
 [1, 2, 3, 4],  // Every row is a Array //
 [3, 4, 5, 5], 
 [5, 6, 7, 7],
];

for (let i = 0; i < _2darr.length; i++) {  // Example of double loop >>> Loop inside of a loop //
console.log(_2darr[i]);
let row = _2darr[i];
for (let j = 0; j < row.length; j++) {
  console.log(row[j]);    
 }
}