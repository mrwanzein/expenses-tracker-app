import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
    const store = createStore(
        combineReducers({ // with this you can combine multiple reducers
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnchancers(applyMiddleware(thunk))
         // configure dev tool
         //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};