import React from 'react'
import "./display.css";
import { useSelector } from 'react-redux';


const Display = () => {
  const {data} = useSelector((state) => {
    return state
  });

  console.log(data);

  return (
    <div className='display'>
        <h2><b>{data}</b></h2>
    </div>
  )
}

export default Display