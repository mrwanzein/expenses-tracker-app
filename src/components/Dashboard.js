import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './expensesListFilters';

const HomePage = () => (
    <div>
        <h1>Welcome</h1>
        <ExpensesListFilters />
        <ExpensesList />
    </div>
);

export default HomePage;