
import { useDispatch } from "react-redux";

const Controls = () => {
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'increment'});
    }

    const decrement = () => {
        dispatch({type: 'decrement'});
    }


  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button type="button" className="btn btn-success" onClick={decrement}>
        -1
      </button>
    </div>
  );
};
export default Controls;
