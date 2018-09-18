import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../redux/selectors/expenses';
import  moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = (props) => (
    <div>
        {props.expenses.map((items) => (
            <div key={items.id}>
                <Link to={`/edit/${items.id}`}>
                <h3>{items.description}</h3>
                </Link>
                <p>{numeral(items.amount / 100).format('$0,0.00')} - {moment(items.createdAt).format('MMMM Do, YYYY')}</p>
            </div>
        ))}
    </div>
);

const mapStateToProps = (state) => {
    return { // the API connects the redux store to the props object of the component via connect()
        expenses: selectExpenses(state.expenses, state.filters) // as the store changes, it rerenders automaticly
    };
};

// don't forget to export the new connected component
export default connect(mapStateToProps)(ExpensesListItem);