export function findTotal(cartItems){
    const earnings = cartItems.filter(item=> item.type='earning').reduce((a,b)=> a.price+b.price, 0);
    const expenses = cartItems.filter(item=> item.type='expense').reduce((a,b)=> a.price+b.price, 0);
    return earnings - expenses;
}