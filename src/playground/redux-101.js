import { createStore } from 'redux'; // called once

const incrementCount = ({incrementBy = 1} = {}) => ({ // action generator - makes it easy to debug 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers
// 1. reducers are pure function (they only affect the input, they dont modify or rely on outside variables)
// 2. Never directly change state or action

const reducer = (state = { count: 0} /*default state*/, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        case 'SET':
            return {
                count: action.count
            }         
        default: 
            return state;
    }
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(() => { // keeps track of every state changes
    console.log(store.getState());
});

// state management with redux - "actions"

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 101 }));
