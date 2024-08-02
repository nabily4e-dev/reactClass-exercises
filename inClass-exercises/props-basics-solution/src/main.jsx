import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// pass this data down as props to the child component(s) that need it!
import user from '@pub/data/user';
console.log(user);

function Links({ links }) {
  console.log(links);

  // const displayLinks = [];
  // for (let key in links) {
  //   displayLinks.push(
  //     <a href={links[key]} key={links[key]}>
  //       {links[key]}
  //     </a>
  //   );
  // }

  const displayLinks = Object.keys(links).map((key) => (
    <a href={links[key]} key={key} style={{ marginBlock: '.3rem' }}>
      {links[key]}{' '}
    </a>
  ));

  return (
    <>
      <div style={{ marginTop: '0.8rem' }}>Links</div>
      {displayLinks}
    </>
  );
}

function About(props) {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src='/images/i-build-stuff.gif' alt='I build stuff' />
      {/* add your <Links /> component here */}
      <Links links={props.links} />
    </div>
  );
}

function Home(props) {
  console.log(props);
  return (
    <div id='home'>
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from <span className='sCity'>{props.city}</span>
      </h1>
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <a href='#home'>Home</a>
      <a href='#about'>About</a>
    </nav>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city} />
      <About bio={user.bio} links={user.links} />
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
