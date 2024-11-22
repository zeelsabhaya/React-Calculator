import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const numbers = (numbervalue) => {
    setInput(input + numbervalue);
  };

  const Operator = (operator) => {
    setInput(input + operator);
  };

  const equals = () => {
      const ans = eval(input);
      setResult(ans);
      setInput('');
  };
  
  const mt = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="Calculator">
      <div className="display">
        <p>{input}</p>
        <p>{result}</p>
      </div>
      <div>
        <button className='button numbers' onClick={() => numbers('1')}>1</button>
        <button className='button numbers' onClick={() => numbers('2')}>2</button>
        <button className='button numbers' onClick={() => numbers('3')}>3</button>
        <button className='button mt' onClick={mt}>C</button>
        <button className='button numbers' onClick={() => numbers('4')}>4</button>
        <button className='button numbers' onClick={() => numbers('5')}>5</button>
        <button className='button numbers' onClick={() => numbers('6')}>6</button>
        <button className='button Operator' onClick={() => Operator('+')}>+</button>
        <button className='button numbers' onClick={() => numbers('7')}>7</button>
        <button className='button numbers' onClick={() => numbers('8')}>8</button>
        <button className='button numbers' onClick={() => numbers('9')}>9</button>
        <button className='button Operator' onClick={() => Operator('-')}>-</button>
        <button className='button numbers' onClick={() => numbers('0')}>0</button>
        <button className='button numbers' onClick={() => numbers('.')}>.</button>
        <button className='button Operator' onClick={() => Operator('*')}>x</button>
        <button className='button Operator' onClick={() => Operator('/')}>/</button>
        <button className='button equals' onClick={equals}>=</button>
      </div>
    </div>
  );
}

export default Calculator;