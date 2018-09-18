import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './expensesListFilters';
import ExpensesSummary from './ExpensesSummary';

const HomePage = () => (
    <div>
        <h1>Welcome</h1>
        <ExpensesSummary />
        <ExpensesListFilters />
        <ExpensesList />
    </div>
);

export default HomePage;