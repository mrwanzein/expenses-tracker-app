import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../redux/selectors/expenses';
import selectExpensesTotal from '../redux/selectors/expenses-total';

const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling 
            &nbsp;{numeral(expensesTotal / 100).format('$0,0.00')}
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);