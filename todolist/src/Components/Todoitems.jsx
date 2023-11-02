import React from 'react'
import './CSS/Todoitems.css';
import tick from './Assests/tick.png';
import not_tick from './Assests/not_tick.png';
import cross from './Assests/cross.png';

export const Todoitems = (props) => { //(props) or ({pass one by one with comma separated}) 
  return (
    <div className='todoitems'>
    <div className="todoitems-container">
      <img src={not_tick} alt=""></img>  
      <img src={tick} alt=""></img>  
      <div className="todoitems-text">{props.text}</div>
    </div>
    <img src={cross} alt=""></img>
    </div>
  )
}
