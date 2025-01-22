==============duplicate aray remove ===============
const a = [1,2,3,4,5,6,1,2];

..............First Way..................
const duplicate = [...new Set(a)]; // [1, 2, 3, 4, 5, 6] 

..............Second Way..................
let duplicate = a.filter((value, index)=>{
  return a.indexOf(value) === index; 
})
console.log(duplicate); // [1, 2, 3, 4, 5, 6]

..............Third way..................
let unique = []  // 
for(let i=0; i<a.length; i++){
    if(!unique.includes(a[i])){
        unique.push(a[i])
    }
}
console.log(unique) // [1, 2, 3, 4, 5, 6]

============ remove duplicate object ====================
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

=============================Fibonachi Series ======================================
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
...............................
## Print Start Second method ##
...............................
for(let i=0; i<=5; i++){
  let str ="";
    for (let j=1; j<=i; j++){
      str = str +"*"
    }
    console.log(str)
}
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
..........................
## Second Method
..........................
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
..........................
## Third Method
..........................
const str = "javaScript";
const b= str.split('')
const c = b.map((x,i)=>{
  return b[b.length-i-1]
})
console.log(c.join('')) //tpircSavaj

===============count duplicate array and output will be in object Key, value pair=============

//count duplicate object
let uniqueCount = ["a", "b", "a", "c", "b", "c", "b", "c", "b", "c"];

const count = {}
const sample = uniqueCount.forEach((x) => {
  return count[x] = (count[x] || 0) + 1
})

console.log('count array:-', count) // output{"a": 2, "b": 4, "c": 4 }

----------Second way---------------
const count= uniqueCount.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  },{})
// output{"a": 2, "b": 4, "c": 4 }	
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
const b = arr.filter((arg)=>{
  if(!parseInt(arg)){
    return arg
  }
})
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
console.log(longestWord);//output : "Tendulkar"

-------------#Second Way -----------------
const a = 'My Name is Sachin Tendulkar' 
const word = a.split(' ');

const c = word.reduce((cur, acc)=>{
  return (cur.length > acc.length ? cur: acc)
})
console.log(c) // Tendulkar

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
let temp =[];
for(let i=0; i<arr.length; i++){
  for(let j=i; j<arr.length; j++){
    if(arr[i]>arr[j]){
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
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
	
...................Second way......................
const str = "Rajkumar";
const vovels = ['a','e','i','o','u'];

let spltstr = str.split('')
const getV = spltstr.filter((x,index)=>{
    return vovels.includes(x)
})
console.log(getV.length) // 3
......................Third Way .............................

const str = 'Rajkumar MAHESHWARI';
let vovels = 'aeiou'
const b = str.toLowerCase().split('').filter((char)=>{
    return vovels.includes(char);
})
console.log(b.length) // 7	
	
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
.........................
## Second option
.........................
for (let i = 0; i <= 5; i++) {
    let line = '';
    //Add space
    for (let j = 5; j > i; j--) {
        line += ' '
    }

    // Add star
    for (let k = 1; k <= (i * 2 - 1); k++) {
        line += "*"
    }
    console.log(line)
}
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
  sum = sum + arr[i]  or // sum += arr[i]
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

======================== Find only Uppercase charactor from strig ==============
const str = 'Hello I am Raj' 
let temp=[];
const a = str.split('').filter((word)=> {
  return word !== " "
})
for(let i=0; i<a.length; i++){
  if(a[i] === a[i].toUpperCase()){
    temp.push(a[i])
  }
}
console.log(temp) // ["H", "I", "R"]
======================== Add hyephen after every 4th charactor (Like: creditcard 1234-5678-9012-1234 ==============
const str = '123412341256125234'
const array = str.split('')
const resultArray = [];
for (let i = 0; i < array.length; i++) {
    resultArray.push(array[i])
   if((i + 1) % 4 === 0){
      resultArray.push('-')
   }
}
if(resultArray[resultArray.length-1] === -1){
  resultArray.pop();
}

console.log(resultArray.join('')); // 1234-1234-1256-1252-34

======================= Find the first non repeated charactor in string Like(cbcbdde) ==================
const str = 'cbcbdde';
const charCount = {};
for(let char of str){
    charCount[char] = (charCount[char] || 0) +1
}
for (let char of str){
    if(charCount[char] === 1){
        console.log(char) // e
    }
}
//output e
------------# Second Way ----------------
const a = 'sdfsdfsdfdsfaddsfk';
const charcount = {};

a.split('').forEach(x => {
  charcount[x] = (charcount[x] || 0) + 1;
});
for (let i = 0; i < a.length; i++) {
  if (charcount[a[i]] === 1) {
    console.log(a[i]);
  }
}
// output a,k
=================================== Reversing letters and words ==================
const str = 'I evol uoy os !hcum'
const wordSplit = str.split(' ')
const revWord = wordSplit.map((x)=>{
    return x.split('').reverse().join('')
})

console.log(revWord.join(' ')) // I love you so much!

==========================sorting an array of string by length ==================
const arr =["You", "arekgkjgkjkjkj", "beautiful", "looking"];
const b = arr.sort((a,b)=>{
    return a.length -b.length
})
console.log(b) // arekgkjgkjkjkj
	
========================== wave array ================== =================
const arr = [3, 5, 2, 1, 6, 4]
const sortarr = arr.sort((a,b)=>{
    return a-b
})
for(let i=0; i < arr.length-1; i+=2){
    [arr[i], arr[i + 1]]  = [arr[i+1], arr[i]]
}
console.log(arr) // [2, 1, 4, 3, 6, 5]

=================================== Add 2 array value and ===========
const a = [2,3,4,5,7,55]
const b = [1,2,3,1]
// output [3,5,7,6,7,55]

let output = [];
for(let i=0; i<a.length; i++){
    if(b[i]){
        output.push(a[i] + b[i])
    } else{
        output.push(a[i])
    }
}
console.log(output)// output [3,5,7,6,7,55]
================================= Convert a string to title case ==================
const a = 'i love you' 
const b = a.split(' ').map((x)=>{
  return x.charAt(0).toUpperCase() + x.slice(1)
})
console.log(b.join(' '))// I Love You

================================= Find the common value from 2 Array ==================
const num1 = [1, 2, 2, 1]
const num2 = [2, 2,4,1]

const result = [];
const count = {};

for(let num of num1){
  count[num] = (count[num] || 0) + 1
}
for(let num of num2){
  if(count[num] > 0){
    result.push(num)
    count[num]--
  }
}
console.log(result) //[2, 2, 1]
-------------------------------------Infosys -----------------

const arr = [1, 2, 3];

const result = {
  sum: arr.reduce((acc, num) => acc + num, 0),
  prod: arr.reduce((acc, num) =>  acc + num, 0)
};

console.log(result); // {sum: 6, prod: 6}
---------------------------------------------------
const salesData = [
    { name: "Jane", amount: 500 },
    { name: "John", amount: 200 },
    { name: "John", amount: 300 },
    { name: "John", amount: 400 },
    { name: "Jane", amount: 100 },
    { name: "Jake", amount: 100 },
  ];

// output with sort amount //  [
    {"name": "Jake", "amount": 100},
    {"name": "Jane","amount": 600},
    {"name": "John","amount": 900}
]
const result = salesData.reduce((acc, { name, amount }) => {
    // Find if the name already exists in the accumulator
    const existing = acc.find((item) => {
      return item.name === name;
    });
    if (existing) {
      existing.amount += amount;
    } else {
      acc.push({ name, amount });
    }
    return acc;
  }, []);

  const sorting = result.sort((a, b) => {
    return (a.amount > b.amount) - (a.amount < b.amount);
  });

  console.log(sorting); 
---------Qus: --------------------------------------------------------------
Qus: in my flat 2 lift only one button to operate and I am in 4th floor and one lift in 1st floor 
	and second lift in 6th floor so what is the logic for which lift near to my floor 
	can write the logic in Javascript?
		
function closeLiftToMe(currentFloor, lift1Floor, lift2Floor) {
  const distance1 = Math.abs(currentFloor - lift1Floor);
  const distance2 = Math.abs(currentFloor - lift2Floor);
  if (distance1 < distance2) {
    console.log('lift 1 is close to me');
  } else if (distance2 < distance1) {
    console.log('lift 2 is close to me');
  } else {
    console.log("both or equal")
  }
}
console.log(closeLiftToMe(4, 1, 5)) // lift 2 is close to me

----------- Find Max value from array--------------------
const temp = [550, 200, 350, 650, 150]



