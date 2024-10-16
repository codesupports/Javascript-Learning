1. Handling Asynchronous Operations
Question: You are making an API call to fetch user data, but sometimes the API responds slowly. How would you handle the situation to ensure the user interface remains responsive?

Sample Answer: To ensure a responsive UI, I would implement a loading indicator that displays while the API call is in progress. I would use the async/await syntax for readability and error handling. Here's a simplified example:

async function fetchUserData() {
  setLoading(true); // Function to show loading indicator
  try {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setUserData(data); // Function to update UI with user data
  } catch (error) {
    console.error('Fetch error:', error);
    setError(error.message); // Function to display error message
  } finally {
    setLoading(false); // Hide loading indicator
  }
}
------------------

2. Debouncing and Throttling
Question: You are developing a search input that triggers API calls on every keystroke. How would you implement debouncing to optimize performance?

Sample Answer: I would use a debounce function to delay the API call until the user has stopped typing for a specified time. Here's an implementation using a custom debounce function:

  function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleSearch = debounce(async (query) => {
  const response = await fetch(`https://api.example.com/search?q=${query}`);
  const results = await response.json();
  setSearchResults(results); // Function to update the UI with results
}, 300);

// Usage
<input type="text" onChange={(e) => handleSearch(e.target.value)} />
----------------------------------

3. Error Handling in Promises
Question: You have a function that returns a promise for fetching data. How would you handle errors that might occur during the fetch operation?

Sample Answer: I would use .catch() to handle errors in promises and provide user feedback. Here's an example:
function fetchData() {
  return fetch('https://api.example.com/data')
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .catch((error) => {
      console.error('Fetch error:', error);
      alert('Failed to fetch data. Please try again later.');
    });
}

-------------------------------
4. Deep Copy vs. Shallow Copy
Question: You need to update the state of a complex object in your application. How would you ensure that you create a deep copy of the object before making changes to it?

Sample Answer: To create a deep copy, I would use JSON.parse(JSON.stringify(object)), but I’d be cautious of its limitations (e.g., it doesn’t handle functions, undefined, or Date objects). For a more robust solution, I might use a utility library like Lodash:

---------------------------
5. Closure and Scope
Question: You have a function that creates a counter. Each counter instance should remember its count. How would you implement this using closures?

Sample Answer: I would create a function that returns an object with methods to increment and retrieve the count, leveraging closures to keep the count private:

function createCounter() {
  let count = 0;
  return {
    increment: () => {
      count++;
    },
    getCount: () => {
      return count;
    },
  };
}

const counter1 = createCounter();
counter1.increment();
console.log(counter1.getCount()); // Output: 1

--------------------------------------------
  6. Event Delegation
Question: You have a list of items, and each item has a button that, when clicked, should perform an action. How would you implement event delegation to manage clicks on these buttons efficiently?

Sample Answer: I would attach a single event listener to the parent element of the list and use event delegation to handle button clicks. This reduces the number of event listeners and improves performance. Here's how it can be done:
const list = document.getElementById('item-list');

list.addEventListener('click', (event) => {
  if (event.target.matches('.item-button')) {
    const itemId = event.target.dataset.id; // Assume each button has a data-id attribute
    handleButtonClick(itemId);
  }
});

function handleButtonClick(id) {
  console.log(`Button clicked for item ID: ${id}`);
}

-----------------------------------------------------
  7. Managing State
Question: You are building a simple to-do list application where users can add and remove tasks. How would you manage the state of the tasks?

Sample Answer: I would use an array to hold the tasks and functions to add and remove tasks. Here’s an example using a simple object to manage the state:

let tasks = [];

function addTask(task) {
  tasks.push({ id: Date.now(), text: task });
  renderTasks();
}

function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = ''; // Clear current tasks
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.onclick = () => removeTask(task.id);
    li.appendChild(button);
    taskList.appendChild(li);
  });
}

-------------------------------------------------
  8. Performance Optimization
Question: You notice that your application is running slowly, especially during rendering. What strategies would you employ to identify and resolve performance issues?

Sample Answer: To identify performance issues, I would:

Profile the Application: Use the browser’s DevTools to analyze rendering performance and identify slow components.
Optimize Rendering: Implement React.memo for functional components or PureComponent for class components to prevent unnecessary re-renders.
Use Code Splitting: Leverage dynamic imports to split the code into smaller chunks that load only when needed.
Minimize DOM Manipulations: Batch updates and minimize direct DOM manipulations where possible.

--------------------------------------------------
9. Closure with SetInterval
Question: You have a function that starts a countdown timer. However, it always logs the same number instead of counting down. How would you fix this using closures?

Sample Answer: To fix the issue, I would use a closure to maintain the correct count during each interval. Here’s an example:

function startCountdown(seconds) {
  for (let i = seconds; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
    }, (seconds - i) * 1000);
  }
}

startCountdown(5); // Logs 5, 4, 3, 2, 1, 0 at one-second intervals

----------------------------------------------------
10. Promises and Async/Await
Question: You are fetching data from two different APIs that depend on each other. How would you handle this situation to ensure that the data is fetched in the correct order?

Sample Answer: I would use async/await to ensure that the first API call completes before making the second one. Here’s an example:

async function fetchData() {
  try {
    const response1 = await fetch('https://api.example.com/first');
    const data1 = await response1.json();
    
    const response2 = await fetch(`https://api.example.com/second/${data1.id}`);
    const data2 = await response2.json();
    
    console.log('Data from both APIs:', data1, data2);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

---------------------------------------------------------
11. Managing Form State
Question: You are creating a form with multiple fields, and you need to manage the form state. How would you implement this in a clean and efficient way?

Sample Answer: I would use an object to represent the form state and handle changes with a single change handler. Here’s an example:

let formData = {
  username: '',
  email: '',
};

function handleInputChange(event) {
  const { name, value } = event.target;
  formData = { ...formData, [name]: value };
}

function renderForm() {
  // Assuming input fields exist with names matching the keys in formData
  document.getElementById('username').value = formData.username;
  document.getElementById('email').value = formData.email;
}

// Usage in form
document.querySelector('form').addEventListener('input', handleInputChange);
