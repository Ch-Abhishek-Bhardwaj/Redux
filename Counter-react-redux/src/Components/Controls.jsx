
import { useDispatch } from "react-redux";
import { useRef } from "react";
const Controls = () => {

    const inputElement = useRef();
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'increment'});
    }

    const decrement = () => {
        dispatch({type: 'decrement'});
    }
    const handleAdd = () => {
        dispatch({type: 'Addition', 
            payload:{number:inputElement.current.value}});
            inputElement.current.value = "";
    }
    const handleSubtract = () => {
        dispatch({type: 'Subtraction', 
            payload:{number:inputElement.current.value}});
            inputElement.current.value = "";
    }
    const handlePrivacy = () => {
        dispatch({type: 'Privacy'});
    }


  return (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button type="button" className="btn btn-success" onClick={decrement}>
        -1
      </button>
      <button type="button" className="btn btn-warning" onClick={handlePrivacy}>Privacy</button>
    </div>
{/* njnfnf */}
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">

      <input type="text" placeholder="Enter Number"
      className="number-input" ref={inputElement}/>


      <button type="button" className="btn btn-info" onClick={handleAdd}>
        Add
      </button>

      <button type="button" className="btn btn-info" onClick={handleSubtract}>
        Subtract
      </button>
    </div>

    </>
   
  );
};
export default Controls;
