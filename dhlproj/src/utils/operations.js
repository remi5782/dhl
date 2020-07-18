import _ from 'lodash';
export function findTotal(cartItems) {
    if (cartItems.length === 0)
        return 0;
    const earnings = cartItems.filter(item => item.type === 'earning');
    const earningsTot = earnings.length === 0 ? 0 : _.reduce(earnings,(a=0,e)=>a+Number(e.price),0);
    const expenses = cartItems.filter(item => item.type === 'expense');
    const expensesTot = expenses.length === 0 ? 0 : _.reduce(expenses,(a=0,e)=>a+Number(e.price),0);
    return earningsTot - expensesTot;
}