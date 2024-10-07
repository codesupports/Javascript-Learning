//function declaration
function myfunc() {
    console.log('hi')
}

//function expression
const myfunc = function () {
    console.log('hi')
}

//arrow function
const myfunc = () => {
    console.log('hi')
}

//anonymous function
setTimeout(function () {
    console.log('hi')
}, 1000)

//named function 
const greet = function sayhelo() {
    console.log('hi')
}
  
// IIFI
(function () {
    console.log('hi')
})();
//Higer Order Function
function higherOrderFunction(callback) {
    callback();
}

//callback function
function fetchdata(callback) {
    setTimeout(() => {
        callback('data fetched')
    }, 1000)
};

// generator function
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

//Async function
async function fetchdata() {
    const response = await fetch('url')
    const data = await response.json();
    return data;
}
