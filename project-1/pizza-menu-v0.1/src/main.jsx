// Imports necessary for building React components and rendering them to the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// The React Pizza functional component
function Pizza() {
  return (
    <div>
      <h2>Pizza Prosciutto</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
      <img src='images/pizzas/prosciutto.jpg' alt='Pizza prosciutto' />
    </div>
  );
}

// The App functional component (starts with an uppercase letter)
function App() {
  return (
    <div>
      <h1>Welcome to the Pizza Menu</h1>
      {/* Reusing the predefined React component */}
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

// Rendering the App component to the DOM using ReactDOM.createRoot function. //* React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Enabling development strict mode to identify potential problems in the application by running checks and warnings during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//? React 17 and older
// ReactDOM.render(<App />, document.getElementById('root'));
