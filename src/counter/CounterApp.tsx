import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/actions/counterActions';

import './App.css';


export const CounterApp = () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };
  return (
    <div className="main">
      <h1><span>{count}</span> </h1>
      <div className="button-container">
        <button onClick={handleIncrement}>
          + 1
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
        <button onClick={handleDecrement}>
          - 1
        </button>

      </div>
    </div>
  )
}
