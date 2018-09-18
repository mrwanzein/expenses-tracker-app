

export default (expensesArr) => {
    if (expensesArr.length === 0){
        return 0;
    } else {
        return expensesArr.map((x) => x.amount).reduce((a, b) => a + b);
    }
};