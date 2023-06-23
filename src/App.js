import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';


function Button({ label, onClick }) {
  return (
    <button className="calc-btn" onClick={onClick}>
      {label}
    </button>
  );
}

function App() {

  const [displayValue, setDisplayValue] = useState('');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue + number);
  };


  const handleOperatorClick = (selectedOperator) => {
    if (displayValue !== '') {
      if (prevValue === null) {
        setPrevValue(parseFloat(displayValue));
      } else if (operator) {
        const result = calculateResult();
        setDisplayValue(result.toString());
        setPrevValue(result);
      }
      setOperator(selectedOperator);
      setDisplayValue('');
    }
  };

  const handleEqualsClick = () => {
    if (prevValue !== null && operator && displayValue !== '') {
      const result = calculateResult();
      setDisplayValue(result.toString());
      setPrevValue(result);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('');
    setPrevValue(null);
    setOperator(null);
  };

  const calculateResult = () => {
    const currentValue = parseFloat(displayValue);
    switch (operator) {
      case '+':
        return prevValue + currentValue;
      case '-':
        return prevValue - currentValue;
      case '*':
        return prevValue * currentValue;
      case '/':
        return prevValue / currentValue;
      default:
        return currentValue;
    }
  };

  return (
    <div className='container d-flex align-items-center justify-content-center vh-100'>
      <div className='border border-secondary border-2 text-center'>      
      <h4> My Calculator</h4>    
                <div className='row p-2'>          
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>
                      <button className='calc-btn' onClick={handleClearClick}>Del</button>
                    </div>
                    <div className='col-9 col-sm-6 col-md-9 col-lg-9'>
                      <input class="form-control border order-secondary border-2" value={displayValue} disabled type='text'></input>
                    </div>          
                </div>
                <div className='row p-2'>          
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>
                    <Button label="7" onClick={() => handleNumberClick('7')} />                    
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="8" onClick={() => handleNumberClick('8')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="9" onClick={() => handleNumberClick('9')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="+" onClick={() => handleOperatorClick('+')} />
                    </div>
                </div>
                <div className='row p-2'>          
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="4" onClick={() => handleNumberClick('4')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="5" onClick={() => handleNumberClick('5')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="6" onClick={() => handleNumberClick('6')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>
                    <button className='calc-btn' onClick={() => handleOperatorClick('-')}>-</button>
                    </div>
                </div>
                <div className='row p-2'>          
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                   
                    <Button label="1" onClick={() => handleNumberClick('1')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="2" onClick={() => handleNumberClick('2')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <Button label="3" onClick={() => handleNumberClick('3')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                    
                    <button className='calc-btn' onClick={() => handleOperatorClick('/')}><span className="mx-1">&divide;</span></button>
                    </div>
                </div>
                <div className='row p-2'>          
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                       
                       <Button label="0" onClick={() => handleNumberClick('0')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                       
                      <Button label="." onClick={() => handleNumberClick('.')} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                       
                      <Button label="=" onClick={() => handleEqualsClick()} />
                    </div>
                    <div className='col-3 col-sm-2 col-md-3 col-lg-3'>                      
                      <button className='calc-btn' onClick={() => handleOperatorClick('*')}><span className="mx-1">&times;</span></button>
                    </div>
          </div>
      
    </div>      
  </div>
  );
}

export default App;
