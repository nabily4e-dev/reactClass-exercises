const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

function App() {
  return (
    <div className='steps'>
      <div className='numbers'></div>

      <p className='message'>Step</p>

      <div className='buttons'>
        <button style={{ backgroundColor: '#7960f2', color: '#ffffff' }}>
          Previous
        </button>
        <button style={{ backgroundColor: '#7960f2', color: '#ffffff' }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
