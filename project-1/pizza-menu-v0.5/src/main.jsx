// Imports necessary for building React components and rendering them to the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

//include the css styles file
import './main.css';

// Add project assets
// pizzas images, index.css, and data.js

// Pizza project components: Pizza, Header, Menu, Footer
function Header() {
  // const styles = { color: 'red', fontSize: '36px', transform: 'uppercase' };
  const styles = {};

  return (
    // inline styling, you can extract into a variable
    <header className='header'>
      <h1 style={styles}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    //! <div class='container'>
    <main className='menu'>
      <h2>Our menu</h2>

      {/* First look into props. Sending the props to a child component */}
      <Pizza
        name='Pizza Prosciutto'
        ingredients='Tomato, mozarella, ham, aragula, and burrata cheese'
        photoName='images\pizzas\prosciutto.jpg'
        price='10'
      />

      {/* Create another component */}
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mozarella, mushrooms, and onion'
        photoName='images\pizzas\funghi.jpg'
        price='12'
      />
    </main>
  );
}

// define the props object parameter that includes all the data/values from the parent component (Menu)
function Pizza(props) {
  console.log(props);

  return (
    // Sending props by entering JavaScript mode '{}' inside the HTML elements and start accessing props values
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
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
