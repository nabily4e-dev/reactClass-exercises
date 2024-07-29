// Imports necessary for building React components and rendering them to the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Add project assets
// pizzas images, index.css, and data.js

// Pizza Project components. Pizza, Header, Menu, Footer
function Pizza() {
  return (
    <div>
      <h2>Pizza Prosciutto</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
      <img src='images\pizzas\prosciutto.jpg' />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>
      <p>asdlkuh</p>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  // Using JavaScript logic in React
  const hour = new Date().getHours();
  const openHour = 9; // change the value to switch the result of the isOpen variable
  const closHour = 22;
  const isOpen = hour >= openHour && hour <= closHour;
  console.log(isOpen);

  //? We can move the condition inside a variable for effeminacy
  // if (hour >= openHour && hour <= closHour) alert("We're currently open!");
  // else alert("Sorry, we're closed");

  return (
    <footer>{isOpen ? "We're currently open!" : 'Sorry, we are closed'}</footer>
  );
}

// React main (root) functional component
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React 17 older
// ReactDOM.render(<App/>, document.getElementById('root'))
