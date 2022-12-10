import {useSelector, useDispatch} from 'react-redux'
import React from 'react';

function App() {
  const counter =useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const increment =()=>{
    dispatch({type:'INC'});
  }
  const decrement =()=>{
    dispatch({type:'DEC'});
  }
  const addByTen=()=>{
    dispatch({type:'ADD', payload:10})
  }
  const subByTen=()=>{
    dispatch({type:'SUB', payload:-10})
  }
  return (
    <div>
      <h1> Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addByTen}>add by 10</button>
      <button onClick={subByTen}>sub by 10</button>
    </div>
  );
}

export default App;
