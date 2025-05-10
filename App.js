import React, { Component, useEffect } from 'react';

// 1. Arrow Function
const greet = () => "Hello from Arrow Function!";

// 2. Class Component
class Welcome extends Component {
  render() {
    return <h2>Welcome from Class Component!</h2>;
  }
}

// 6. Import/Export-like example (local use)
const square = x => x * x;

const App = () => {
  // 3. Destructuring
  const user = { name: "Padma", age: 21 };
  const { name, age } = user;

  // 4. Template Literals
  const greeting = `Hi ${name}, you are ${age} years old.`;

  // 5. Let and Const
  let counter = 0;
  const PI = 3.14;

  // 7. Spread and Rest Operators
  const nums = [1, 2, 3];
  const newNums = [...nums, 4];

  const sum = (...args) => args.reduce((a, b) => a + b, 0);

  // 8. Promises using useEffect to run once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => console.log("Fetched User:", data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{greet()}</h1> {/* Arrow Function */}
      <Welcome />         {/* Class Component */}
      <p>{greeting}</p>   {/* Template Literals */}
      <p>PI is {PI}, Counter is {counter}</p> {/* Let & Const */}
      <p>Original Numbers: {nums.join(", ")}</p>
      <p>New Numbers (spread): {newNums.join(", ")}</p> {/* Spread */}
      <p>Sum using rest operator: {sum(10, 20, 30)}</p> {/* Rest */}
      <p>Square of 5 is: {square(5)}</p> {/* Import/Export mimic */}
    </div>
  );
};

export default App;
