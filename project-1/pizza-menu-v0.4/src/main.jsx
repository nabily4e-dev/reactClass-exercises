// Imports necessary for building React components and rendering them to the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

//include the css styles file
import './main.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'images/pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'images/pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'images/pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'images/pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'images/pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'images/pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

// Add project assets
// pizzas images, index.css, and data.js

// Pizza Project components. Pizza, Header, Menu, Footer
function Pizza() {
  return (
    {
pizzaData.map()
    <li>
      <img src={pizzaData[0].photoName} />
      <h3>{pizzaData[0].name}</h3>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </li>
    }
  );
}

function Header() {
  // const styles = { color: 'red', fontSize: '36px', transform: 'uppercase' };

  return (
    // inline styling, you can extract into a variable
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    //! <div class='container'>
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza name='new name' photo='new photo' />
      <Pizza >

      </>
      <Pizza>
      <Pizza />
    </main>
  );
}

function Footer() {
  // Using JavaScript logic in React
  const hour = new Date().getHours();
  const openHour = 12; // change the value to switch the result of the isOpen variable
  const closHour = 22;
  const isOpen = hour >= openHour && hour <= closHour;
  console.log(isOpen);

  //? We can move the condition inside a variable for effeminacy
  // if (hour >= openHour && hour <= closHour) alert("We're currently open!");
  // else alert("Sorry, we're closed");

  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()}. We&apos;re currently open!
    </footer>
  );
}

// React main (root) functional component
function App() {
  return (
    <div className='container'>
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
