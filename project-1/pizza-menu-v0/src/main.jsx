// Imports necessary for building React components and rendering them to the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// The App functional component (starts with an uppercase letter)
function App() {
  return <h1>Hello, React!</h1>;
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
