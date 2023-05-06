//Reducer fn is basically how we specify the app state changes in response to certain actions to our context
//instead of useState we use useReducer as when a state is event triggered many times for diff actions to be 
// performed it gets complex and better to use reducer fn.
export default (state,action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
         case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.map(transaction => transaction)
            }
        default:
            return state
    }
    

}