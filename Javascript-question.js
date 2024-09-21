==============duplicate aray remove ===============
const a = [1,2,3,4,5,6,1,2];

const duplicate = [...new Set(a)]; // [1, 2, 3, 4, 5, 6]

let duplicate = a.filter((value, index)=>{
  return a.indexOf(value) === index; 
})
console.log(duplicate); // [1, 2, 3, 4, 5, 6]

============ remove duplicate object ===========
const members = [
  { id: 1, name: 'John' }, 
  { id: 2, name: 'Jane' },
  { id: 1, name: 'Johnny' },
  { id: 4, name: 'John' },
];

const unique = [...new Map(members.map((m)=> [m.name, m])).values()];  

console.log(unique);
........................................................
	const books = [
		{ title: "C++", author: "Bjarne" },
		{ title: "Java", author: "James" },
		{ title: "Python", author: "Guido" },
		{ title: "Java", author: "James" },
	];
 
const unique = books.filter((data, index)=>{
	return index === books.findIndex((x) => {
			return data.title === x.title});
	})
 
console.log(unique);
================How do you check if an element exists in an array?=============
let arr = [1, 2, 3];

if (arr.indexOf(2) !== -1) {
	console.log('Element found');
} else {
	console.log('Element not found');
}
//"Element found"

============== Find the even number from Array =============
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter((x, i)=>{
   return x % 2 === 0;
})

console.log(even) // [2, 4, 6, 8]

================ Sort an array ========================

const fruits = ['banana', 'apple', 'orange', 'mango'];

const sortArr = fruits.sort((a,b)=>{
  return (a>b) - (a<b)
})

const sortArr = fruits.sort((a,b)=>{
  return a.localeCompare(b)
})
console.log(sortArr)


const fruits = ['banana', 'apple', 'orange', 'mango', "apple"];
const b = fruits.filter((data)=>{
  return (data.indexOf('app') !== -1)
})
console.log(b) //output ["apple", "apple"]

============================= Swap first and last array ================

const a = [1,2,3,4,5]
let first = a[0];
a[0] = a[a.length - 1]
a[a.length -1] = first
console.log(a) // output [5, 2, 3, 4, 1]

=========================== remove all negative value from array =================
const a = [1,-1,2,-3]
const b = a.filter((x,i)=>{
  return x > -1
})
console.log(b) // output [1,2]

=============================Fibonachi Series ===============
let n1=0, n2=1, nextItem;

for(let i = 0; i <= 7; i++){
  console.log(n1);
  nextItem = n1 + n2;
  n1=n2;
  n2=nextItem;
}
//output 0 1 1 2 3 5 8 13
========================Print Star in tree pattern================

let a = 5;
for(let i = 1; i <= a; i++){
    let str = "*";
    console.log(str.repeat(i))
}
//Output
*
**
***
****
*****
------------------------------------------
let n = 5;
for (let i = n; i >= 1; i--) {
    let str = "* ";
    console.log(str.repeat(i));
}
//output 
*****
****
***
**
*
============================ reverse string without inbuilt function==============
function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("javascript"))

-------------------------
const arr = "rajkumar"

let b = arr.split("").reduce((acc,cur)=>{
  return cur+acc
})

console.log(b) //ramukjar
-----------------------------
const a = 'Javacript';
let rev = "";
for (let i = a.length - 1; i >= 0; i--) {
  rev += a[i]
}
console.log(rev)
===============count duplicate array and output will be in object Key, value pair=============

//count duplicate object
let uniqueCount = ["a", "b", "a", "c", "b", "c", "b", "c", "b", "c"];

const count = {}
const sample = uniqueCount.forEach((x) => {
  return count[x] = (count[x] || 0) + 1
})

console.log('count array:-', count) // output{"a": 2, "b": 4, "c": 4 }

=============== How to flat flatern aray =============
const arr=[1,2,[5,3,4,[7,8,9,[10,11]]]];

const result=arr.flat(Infinity);
console.log(result); //   [1,2,5,3,4,7,8,9,10,11];

-------
const flattern = (ar) => {
  return ar.toString().split(',').map(Number);
}
console.log(arr); //   [1,2,5,3,4,7,8,9,10,11];

============================ Fird arry or number ======================
const arr = [1, 2, 3, "Ram", "Raj", "John"]
const b = arr.filter((item) => {
  return typeof item == 'string'
})
console.log(b)// ['Ram', 'Raj', 'John']

---------------Second Way--------------------------------
const arr = [1, 2, "3", "Ram", "Raj", "John"]
const b = arr.filter(myFunc)
function myFunc(arg) {
  if (!isNaN(parseInt(arg))) {
    return arg
  }
}
console.log(b) // [1, 2, '3']

=================== How to sort object ============
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){
	return a.year - b.year
	});
// sort with the type///
cars.sort((a,b)=> a.type.localeCompare(b.type))

=============== Longest word from sentences ===========
const sentences = "My Name is Sachin Tendulkar";
let longestWord = "";

const word = sentences.split(' ');
for (let i = 0; i < word.length; i++) {
  if (word[i].length > longestWord.length) {
    longestWord = word[i]
  }
}

console.log(longestWord);
//output : "Tendulkar"

======================Write a function that checks if a given string is a palindrome.==========

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome('level'));
// Output: true

======================swaps the first two elements ===============================
const arr = [1, 2, 3, 4, 5];

const swapFirstTwoArr = ([first, two, ...rest]) => {
  return [...rest, first, two]
}

console.log(swapFirstTwoArr(arr)); 
// output [3, 4, 5, 1, 2]


======================== Random Password generartor ==================
const randomGenerator = () => {
  const charset = "abcdefgABCDEFG123456";
  let password = "";

  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * charset.length)
    password += charset[randomNumber];
  }
  return password
}
console.log(randomGenerator()) // output e6efb

==========Sort array without using sort method ==============
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
for (var i = 0; i<arr.length; i++){
  
  let min = i;
  for(var j=i+1; j<arr.length; j++){
    
    if(arr[j]< arr[min]){
      min=j
    }
  }
  if(min !==i){
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp
  }
  
}
console.log(arr)

================================ Square of Array===========
const a = [1,2,3,4,5,6,1,2];
let b = a.map((item)=>{
  return Math.pow(item,2)
})
console.log(b) // output [1, 4, 9, 16, 25, 36, 1, 4]

---Add, Edit, Delete -----https://www.shecodes.io/athena/9359-how-to-read-and-delete-json-data-in-react



const onChangePartNo = (e) => {
        let foo = e.target.value.split("-").join("");
        if (foo.length > 0) {
            foo = foo.match(new RegExp('.{1,5}', 'g')).join("-");
          }          
        setPartNumber(foo);
    }

================= Find Min and Max number of array ==================
const a = [1,5,4,3,2]
let b  = Math.min.apply(null, a); // 1 
 console.log(Math.min(...a))

let c  = Math.max.apply(null, a) // 5
 console.log(Math.max(...a))
 --------------------------------------------
 const b = a.reduce((acc, curr) => {
  return (acc < curr) ? acc : curr
})
//Output 5
=========== convert string to Number ===========
var a = '10';

1) parseInt(a) // 10
2) + '10' // 10
============================== Missing value from array =================
const arr = [1, 2, 3, 4, 7, 8, 9];
const missingVal = [];

const minVal = Math.min(...arr)
const maxVal = Math.max(...arr)

for (let i=minVal; i<maxVal; i++){
 if(arr.indexOf(i) === -1){
    missingVal.push(i)
  }
}
console.log(missingVal) // [5,6]

	



========================how to find vowels from string in javascript ===========================
let string = prompt('please enter')
const vovels = ['a','e','i','o','u'];
const getVovels = (arg)=>{
  var count =0;
  for(let letter of arg.toLowerCase()){
    if(vovels.includes(letter)){
      count++
    }
  }
return count
}
console.log(getVovels(string))
======================= Print Star Pramid ==============
for(let i = 1; i<=5; i++){
  for(let j=5; j>i; j--){
    document.write('&nbsp')
  }
  for(let k=1; k<=(i*2-1); k++){
    document.write('*');
  }
  document.write('<br/>')
}
//output
    *
   ***
  *****
 *******
*********
=======================Javascript Random number generator between 2 number=============
const randomNumber = (min, max)=>{
	return Math.floor(Math.random()* (max-min)+1)
}
console.log(randomNumber(1,6)
====================== Calculate the factorial of any number ===================
let fact =1;
for(let i=2; i<=5; i++){
  fact *= i
}
console.log(fact) //output 120

===================== write a function to check if a given number is Prime ==============
function isPrime(num){
  if(num <=2) {
    return `${num} is not a Prime`
  } 
  for(let i =2; i< num; i++){
    if(num % i===0) {
      return `${num} is not a Prime number`
    }
  }
  return `${num} is a Prime number`
}
console.log(isPrime(13)) // output: 13 is a Prime number

=========================Sum of given Array with for loop=========
const arr = [2,3,2,3,5]
let sum =0;
for(let i=0; i <arr.length; i++){
  sum = sum + arr[i]
}
console.log(sum) // 15

========================= Random Number generartor (Like OTP )=================
function randomNumber (num){
const charactor = "0123456789";
let result ="";
for(let i=0; i < num; i++){
  const randomVal = Math.floor(Math.random() * charactor.length)
  result += charactor.charAt(randomVal)
}
return result
}
console.log(randomNumber(4)) // randon number generates 1182 or 2254 or 3256
	
======================= Rotate array ====================================
const arr = [1,2,4,6,7,8,12];
const b = arr.map((item, i)=>{
  return arr[arr.length-i-1]
})
console.log(b) // [12, 8, 7, 6, 4, 2, 1]

====================== 2 array merge and sort ==========================
et a=[1,2,3,5,9]
let b=[4,6,7,8]

const c = [...a,...b].sort()
console.log(c) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

======================== Is array Anagrams or not =======================
function isAnagrams(str1, str2){
  let sorted1 = str1.split('').sort().join('').toLowerCase();
  let sorted2 = str2.split('').sort().join('').toLowerCase();
  return (sorted1 === sorted2)
}

console.log(isAnagrams('raj', 'raj')) // true
console.log(isAnagrams('raj', 'raaj')) // false



