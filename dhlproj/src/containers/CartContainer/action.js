export const addExpense = (expense) => async dispatch => {
    dispatch({type: "ADD_EXPENSE", payload: expense})
}
export const addEarning = (earning) => async dispatch => {
    dispatch({type: "ADD_EARNING", payload: earning})
}
export const deleteExpense = (expense) => async dispatch => {
    dispatch({type: "DELETE_EXPENSE", payload: expense})
}
export const deleteEarning = (earning) => async dispatch => {
    dispatch({type: "DELETE_EARNING", payload: earning})
}