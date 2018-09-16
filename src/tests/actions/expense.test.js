import { addExpenses, editExpenses, removeExpenses } from '../../redux/actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpenses('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('it should setup update action object', () => {
    const action = editExpenses('123abc', {note: 'gotUpdated'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'gotUpdated'}
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'aDescription',
        note: 'aNote',
        amount: 12300,
        createdAt: 1234
    };
    const action = addExpenses(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String) // for dynamic data
        }
    })
});

test('should setup add expense action object with default value', () => {
    const action = addExpenses();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});