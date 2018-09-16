import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpenses } from '../redux/actions/expenses';

const CreatePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpenses(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(CreatePage);