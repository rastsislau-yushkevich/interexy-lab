import { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count++ };
    case 'TOGGLE':
      return { ...state, visible: !state.visible };
  }
};

const CounterWithText = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, visible: true});

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'TOGGLE' });
        }}
      >
        Count++
      </button>
      {state.visible && <h2>Some Kind Of Text</h2>}
    </div>
  );
};

export default CounterWithText;
