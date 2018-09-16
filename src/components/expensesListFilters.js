import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../redux/actions/filters';

class ExpensesListFilters extends React.Component {
    state = {
        startDateId: uuid(),
        endDateId: uuid(),
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    
    render() {
        return (
            <div>
            search: <input type="text" value={this.props.filters.text} onChange={(e) => {
                 this.props.dispatch(setTextFilter(e.target.value)); // import the action before dispatch
             }}/>
             <br/>
             <label>Sort By:</label>
              {/* know as controlled value = value you want to change on the state */}
             <select value={this.props.filters.sortBy} onChange={(e) => {
                 if (e.target.value === 'date') {
                     this.props.dispatch(sortByDate()); 
                 } else if (e.target.value === 'amount') {
                     this.props.dispatch(sortByAmount()); 
                 }
             }}>
                 <option value="date">date</option>
                 <option value="amount">amount</option>
             </select>
             <DateRangePicker 
                 startDate={this.props.filters.startDate}
                 startDateId={this.state.startDateId}
                 endDate={this.props.filters.endDate}
                 endDateId={this.state.endDateId}
                 onDatesChange={this.onDatesChange}
                 focusedInput={this.state.calendarFocused}
                 onFocusChange={this.onFocusChange}
                 showClearDates={true}
                 numberOfMonths={1}
                 isOutsideRange={() => false}
             />
         </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    };
};

export default connect(mapStateToProps)(ExpensesListFilters);