import React, { useState } from 'react'
import "./button.css";
import { useDispatch } from 'react-redux';
import { action } from '../../Redux/action';


const Button = () => {

  const dispatch = useDispatch();
  const [count,setCount] = useState(0);

  function incrementFn(){
    setCount(count + 1)
  }

  function decrementFn(){
    setCount(count - 1)

  }

  function resetFn(){
    setCount(0)
  }

  dispatch(action(count));

  // console.log(data,dataFn);
  return (
    <div className='button'>
        <button onClick={() => {
          incrementFn()
        }}>Increment</button>
        <button onClick={() => {
          decrementFn()
        }}>Decrement</button>
        <button onClick={() => {
          resetFn()
        }}>Reset</button>
    </div>
  )
}

export default Button