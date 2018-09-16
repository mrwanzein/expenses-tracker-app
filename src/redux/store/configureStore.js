import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
export default () => {
    const store = createStore(
        combineReducers({ // with this you can combine multiple reducers
            expenses: expensesReducer,
            filters: filtersReducer
        }),
         // configure dev tool
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};