/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'beginner',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'advanced',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'NextJS',
    level: 'intermediate',
    color: '#0000006b',
  },
];

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
    // <div className='skill-list'>
    //   <Skill skill='React' emoji='💪' color='blue' />
    //   <Skill skill='HTML+CSS' emoji='💪' color='orange' />
    //   <Skill skill='JavaScript' emoji='💪' color='yellow' />
    //   <Skill skill='Next.js' emoji='👶' color='grey' />
    // </div>

    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '👶'}
        {level === 'intermediate' && '👍'}
        {level === 'advanced' && '💪'}
      </span>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
