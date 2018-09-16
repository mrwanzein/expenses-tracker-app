import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import {addExpenses} from './redux/actions/expenses';
import getVisibleExpenses from './redux/selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpenses({ description: 'Water Bill', amount: 25000 }));
store.dispatch(addExpenses({ description: 'Gas Bill', amount: 16000 }));
store.dispatch(addExpenses({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log((visibleExpenses));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
