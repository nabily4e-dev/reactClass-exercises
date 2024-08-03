import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// pass this data down as props to the child component(s) that need it!
import user from '@pub/data/user';
console.log(user);

function Links({ links }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={links.github}>{links.github}</a>
      <a href={links.linkedin}>{links.linkedin}</a>
    </div>
  );
}

function About(props) {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src='/images/i-build-stuff.gif' alt='I build stuff' />
      <Links links={props.links} />
    </div>
  );
}

function Home(props) {
  console.log(props);
  return (
    <div id='home'>
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from{' '}
        <span className='sCity'>{props.city}</span>
      </h1>
    </div>
  );
}

function NavBar() {
  const links = ['home', 'about', 'projects'];

  return <nav>{/* display an <a> tag for each link here */}</nav>;
}

function ProjectItem({ name, about, technologies }) {
  return (
    <div className='project-item'>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className='technologies'>
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id='projects'>
      <h2>My Projects</h2>
      <div id='project-list'>{/* render ProjectItem components here */}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} color={user.color} city={user.city} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
