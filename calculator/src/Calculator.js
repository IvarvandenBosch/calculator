import './App.css';
import React, {useState} from 'react';

function Calculator() {

  const buttonArray = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,0 , '.', '/', '*', '-', '+']
  const [displayValue, setDisplayValue] = useState("")

  function handleClick(e) {
    const buttonValue = e.target.getAttribute('data-key')

    if (buttonValue) {
      setDisplayValue(prevValue => prevValue + `${buttonValue}`)
    }
    if (displayValue === undefined) {
      setDisplayValue("")
    }
  }

  function handleSolve(e) {
    // eslint-disable-next-line no-eval
    try {
      const res = eval(`${displayValue}`);
      setDisplayValue(`${res}`)
    } catch (error) {
      setDisplayValue("error")
    }

    if (displayValue === undefined) {
      setDisplayValue("")
    }
  }

  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSolve()
    }
  });

  return (
    <div className="App">
      <input 
        value={displayValue} 
        onChange={(e) => setDisplayValue(e.target.value)} 
        className='display' 
        placeholder='eg. 45 + 24'
      />
      <div className='calc-grid'>
        {buttonArray.map(button => {
          return (
            <div 
              key={button}
              data-key={button} 
              className={`button ${button}`}
              onClick={e => handleClick(e)}
            >{button}</div>
          )
        })}
        <div 
          data-key="CLEAR"
          className={`button CLEAR`}
          onClick={() => setDisplayValue("")}
        >CLEAR</div>
        <div 
          data-key="DEL"
          className={`button DEL`}
          onClick={() => setDisplayValue(displayValue.substring(0, displayValue.length - 1))}
        >DEL</div>
        <div 
          data-key="="
          className={`button =`}
          onClick={e => handleSolve(e)}
        >=</div>
      </div>
    </div>
  );
}

export default Calculator;
