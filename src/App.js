import {useSelector, useDispatch} from 'react-redux'
import React from 'react';
import {actions} from './store/index'

function App() {
  const counter =useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  const increment =()=>{
    dispatch(actions.increment());
  }
  const decrement =()=>{
    dispatch(actions.decrement());
  }
  const addByTen=()=>{
    dispatch(actions.addBy(10))
  }
  const subByTen=()=>{
    dispatch(actions.subBy(-10))
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
