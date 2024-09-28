Qus 1: Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

function first(array, n) {
    if (array == null) {
        return void 0;
    }
    if (n == null) {
        return array[0]
    }
    if (n < 0) {
        return []
    }
    return array.slice(0, n)
}

console.log(first([7, 9, 0, -2], 2)); // [7,9]
console.log(first([], 3));            // []
console.log(first([7, 9, 0, -2], 3)); // [7,9,0]
console.log(first([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // []
......................................................................................................................................................

Qus 2: Write a JavaScript function to check whether an 'input' is an array or not.

function is_array(input){
  if(toString.call(input) === '[object Array]'){
    return true
  } 
  return false
}

console.log(is_array('w3resource')); // false
console.log(is_array([1, 2, 4, 0])); // true
......................................................................................................................................................

Qus 3:Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

  function last (array, n){
    if(array === null){
        return void 0;
    }
    if (n === null){
        return array[array.length-2];
    }
    if(n < 0 ){
        return array[array.length-2];
    }
    return array.slice(array.length-n)
}

console.log(last([7, 9, 0, -2], 2));
console.log(last([], 3));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
console.log(last([7, 9, 0, -2], -3));
......................................................................................................................................................
Qus 4: Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

let num = "065468";
var str1 = num.toString();

let result = [];
const splitNumber = str1.toString().split('');
for (let i = 0; i < splitNumber.length; i++) {
    if (splitNumber[i-1] % 2 === 0 && splitNumber[i] % 2 === 0) {
        result.push("-" + splitNumber[i])
    } else {
        result.push(splitNumber[i]);
    }

}
console.log(result.join(''))
......................................................................................................................................................
Qus 5: Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the 
       output should be 'tHE qUICK bROWN fOX'.

const str = 'The Quick Brown Fox';
const splitSrr = str.toUpperCase().split(' ');
let output='';
for(let i=0; i<splitSrr.length; i++){
    output += splitSrr[i].charAt(0).toLowerCase() + splitSrr[i].slice(1)+ " "   
}
console.log(output) //tHE qUICK bROWN fOX 
......................................................................................................................................................



    
