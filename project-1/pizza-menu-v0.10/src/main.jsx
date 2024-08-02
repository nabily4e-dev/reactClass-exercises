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

// Pizza project components: Pizza, Header, Menu, Footer
function Header() {
  // const styles = { color: 'red', fontSize: '36px', transform: 'uppercase' };
  const styles = {};

  return (
    //? Applying external styling
    <header className='header'>
      {/*//* inline styling, you can extract into a variable */}
      <h1 style={styles}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizzas = pizzaData;
  // const pizzas = []
  const pizzasNum = pizzaData.length;
  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzasNum > 0 ? (
        //? Rendering the pizzas list menu using map function
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working in our menu. Please come back later :)</p>
      )}

      {/*//? Defining our own props to a child component */}
      {/* 
        <Pizza
          name='Pizza Prosciutto'
          ingredients='Tomato, mozarella, ham, aragula, and burrata cheese'
          photoName='images\pizzas\prosciutto.jpg'
          price='10'
        />
      */}

      {/* Create another component */}
      {/* 
        <Pizza
          name='Pizza Funghi'
          ingredients='Tomato, mozarella, mushrooms, and onion'
          photoName='images\pizzas\funghi.jpg'
          price='12'
        />
      */}
    </main>
  );
}

//? define the props object parameter that includes all the data/values from the parent component (Menu)
function Pizza(props) {
  console.log(props);

  // Filtering out the sold out pizzas
  if (props.pizzaObject.soldOut) {
    return null;
  }

  return (
    // Sending props by entering JavaScript mode '{}' inside the HTML elements and start accessing props values
    <div className='pizza'>
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  ////? Using JavaScript logic in React
  const hour = new Date().getHours();
  const openHour = 6; // change the value to switch the result of the isOpen variable
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //* We can move the condition inside a variable for effeminacy
  // if (hour >= openHour && hour <= closHour) alert("We're currently open!");
  // else alert("Sorry, we're closed");

  // if (!isOpen) {
  //   return (
  //     <p>
  //       Sorry, we're currently closed! <Header />
  //     </p>
  //   );
  // }

  return (
    <footer className='footer'>
      {/*{new Date().toLocaleTimeString()}. We&apos;re currently open! */}

      {/*//? Conditional Rendering | Short Circuiting*/}
      {isOpen ? (
        // Reusing the extracted Order component
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 aand {closeHour}:00{' '}
        </p>
      )}
    </footer>
  );
}

// Extracting a new Order component
function Order(props) {
  return (
    <div className='order'>
      <p>
        We're open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
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
