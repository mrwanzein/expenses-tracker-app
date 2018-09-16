import moment from 'moment';

// Desired filtered output function
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((items) => {
        const createdAtMoment = moment(items.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
        const textMatch = items.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
        if (sortBy === 'date') {
            return b.createdAt - a.createdAt 
        } else if (sortBy === 'amount') {
            return b.amount - a.amount 
        }
    });
};