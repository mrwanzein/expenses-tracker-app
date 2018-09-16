// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [...state, action.expense];
        case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
        return state.map((items) => {
                if (items.id === action.id) {
                    return {
                        ...items,
                        ...action.updates
                    }
                } else {
                    return items;
                }
            });
            default:
            return state;
    }
};

