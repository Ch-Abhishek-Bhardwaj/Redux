const redux = require("redux");

const initialState = {counter : 0};

const reducer = (store= initialState, action) => {
    let newStore = store;
    if(action.type === 'increment'){
        newStore.counter++;
    }else if(action.type === 'decrement'){
        newStore.counter--;
    }else if(action.type=== 'Addition'){
        newStore={counter: store.counter+action.payload.number}; 
    }
    return newStore;
}

const store = redux.createStore(reducer);

const subscriber = () =>{
    const state = store.getState();
    console.log(state);
}
store.subscribe(subscriber); 

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'Addition', payload:{number:5}});
