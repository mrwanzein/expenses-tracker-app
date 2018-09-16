import uuid from 'uuid';

// ADD_EXPENSE
export const addExpenses = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
export const removeExpenses = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpenses = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});