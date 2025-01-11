import { useEffect, useState } from 'react';
import './App.css';
import { ConfigCounter } from './components/ConfigCounter/ConfigCounter';
import { Counter } from './components/Counter/Counter';

function App() {
  const initValues = JSON.parse(localStorage.getItem('counter value') ?? '0');

  const [startValue, setStartValue] = useState(initValues['startValue'] || 0);
  const [maxValue, setMaxValue] = useState(initValues['maxValue'] || 7);
  const [isError, setIsError] = useState(false);

  const setValuesHandler = () => {
    localStorage.setItem(
      'counter value',
      JSON.stringify({ startValue: startValue, maxValue: maxValue })
    );
  };

  useEffect(() => {
    if (startValue >= 0 && maxValue > 0 && maxValue > startValue) {
      setValuesHandler();
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [startValue, maxValue, isError]);

  return (
    <div className="App">
      <ConfigCounter
        setStartValue={setStartValue}
        startValue={startValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        setValuesHandler={setValuesHandler}
        isError={isError}
      />
      <Counter startValue={startValue} maxValue={maxValue} isError={isError} />
    </div>
  );
}

export default App;
