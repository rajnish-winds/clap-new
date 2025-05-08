import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterNewSlice';

export default function CounterNew() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter New: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
