import {createStore} from "redux";

const initialState = {counter : 0};

const counterReducer = (store=initialState,action)=>{
    if(action.type === 'increment'){
        return {counter: store.counter+1};
    }else if(action.type === 'decrement'){
        return {counter: store.counter-1};
    }  
    return store;
}



const CounterStore = createStore(counterReducer);
export default CounterStore;