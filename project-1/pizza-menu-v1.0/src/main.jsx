// Imports necessary for building React components and rendering them to the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

//include the css styles file
import './main.css';

// Importing the pizza data from the data.js file
import pizzaData from '../public/data.js';

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
  const pizzas = pizzaData;
  // const pizzas = []
  const pizzasNum = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {pizzasNum > 0 ? (
        // Use of React Fragment to avoid adding an extra div element
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          {/*//? Rendering the pizzas list menu using map function */}
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
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
//? Destructuring the props object to get the pizzaObject properties
function Pizza({
  pizzaObject: { soldOut, photoName, name, ingredients, price },
}) {
  // console.log(props);

  //? Conditional Rendering to filter out the sold out pizzas
  // if (soldOut) return null;

  return (
    // Sending props by entering JavaScript mode '{}' inside the HTML elements and start accessing props values
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        {/* {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObject.price}</span>
        )} */}

        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
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
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 aand {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
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
