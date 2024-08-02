import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// pass this data down as props to the child component(s) that need it!
import user from '@pub/data/user';
console.log(user);

function NavBar() {
  return (
    <nav>
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
    </nav>
  );
}

function Home(props) {
  return (
    <div id='home'>
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src='/images/i-build-stuff.gif' alt='I build stuff' />
      {/* add your <Links /> component here */}
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
