/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src='nabil.jpg' alt='Nabil K. Al-Ashbat' />;
}

function Intro() {
  return (
    <div>
      <h1>Nabil K. Al-Ashbat</h1>
      <p>
        Front-End Web Developer and trainer at Tec Faculty. I am working as a
        Frontend web developer at Tharwat.loc
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className='skill-list'>
      <Skill skill='React' emoji='💪' color='blue' />
      <Skill skill='HTML+CSS' emoji='💪' color='orange' />
      <Skill skill='JavaScript' emoji='💪' color='yellow' />
      <Skill skill='Next.js' emoji='👶' color='grey' />
    </div>
  );
}

function Skill(props) {
  return (
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
