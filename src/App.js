import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

export const characters = [
  "c",
  "%",
  "Del",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "="
];

export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
export const chars = ["*", "-", "/", "%", "+"];


function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(null)
  const [showError, setShowError] = useState(false)

  const updateExpression = (value) => {
    if(value === 'c'){
      setExpression('')
      setResult(null)
      setShowError(false)
    }else if(value === '='){
      try{
        const result = eval(expression)
        setResult(result)
      }catch(err){
        setShowError(true)
      }
    }else if(value === 'Del'){
      if(expression.length){
        const expArray = expression.split('')
        expArray.pop()
        const updatedExpression = expArray.join('')
        setExpression(updatedExpression)
      }
    }else {
      if(chars.includes(value) && expression.length){
        const lastChar = expression[expression.length-1]
        if(chars.includes(lastChar)){
          
        }else{
          setExpression(expression + value)
        }
      }else{
        setExpression(expression + value)
      }
    }
  }

  return (
    <div className="App" style={{backgroundColor: 'orange', width: '350px', padding: '20px'}}>
      <p style={{height: '50px', color: '#fff', textAlign: 'end'}}>{expression}</p>
      <p style={{height: '50px', color: '#fff', textAlign: 'end'}}>{showError ? 'Invalid Expression' : result ? result : 0}</p>
      {
        characters.map(char=><button onClick={()=>{
          updateExpression(char)
        }} style={{width: '80px', height: '80px', borderRadius: '50%', cursor: 'pointer'}}>{char}</button>)
      }
    </div>
  );
}

export default App;
