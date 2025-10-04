import {createStore} from "redux";

const initialState = {
    counter : 0,
    privacy :false
};


const counterReducer = (store=initialState,action)=>{
    if(action.type === 'increment'){
        return {counter: store.counter+1, privacy:store.privacy};
    }else if(action.type === 'decrement'){
        return {counter: store.counter-1, privacy:store.privacy};
    }else if(action.type === 'Addition'){
        return {counter: store.counter+Number(action.payload.number), privacy:store.privacy}; 
    }else if(action.type === 'Subtraction'){
        return {counter: store.counter-Number(action.payload.number), privacy:store.privacy}; 
    }else if(action.type === 'Privacy'){
        return {privacy: !store.privacy, counter:store.counter};
    }
    return store;
}



const CounterStore = createStore(counterReducer);
export default CounterStore;