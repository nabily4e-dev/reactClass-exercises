import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const adviceAPIResponse = await fetch('https://api.adviceslip.com/advice');
    const adviceData = await adviceAPIResponse.json();
    const advice = adviceData.slip.advice;
    setAdvice(advice);
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className='container'>
      <header>
        <h1>Today&apos;s Advice</h1>
      </header>
      <main>
        <h1 className='advice'>{advice}</h1>
        <p>
          You have read <strong className='advice-count'>{count}</strong>{' '}
          {count === 1 ? 'piece' : 'pieces'} of advice
        </p>
        <button className='btn' onClick={getAdvice}>
          Get New Advice
        </button>
      </main>
    </div>
  );
}

export default App;
