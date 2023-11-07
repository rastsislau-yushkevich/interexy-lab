import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(2);
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>Count: {count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type='text'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
        Increment by amount
      </button>
      <button onClick={() => dispatch(decrementByAmount(amount))}>
        Decrement by amount
      </button>
    </>
  );
};

export default Counter;
