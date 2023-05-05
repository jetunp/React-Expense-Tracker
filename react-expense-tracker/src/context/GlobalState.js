import React, { createContext, useReducer } from "react";
import Reducer from './Reducer';

//Initial state: The value you want the state to be initally, this arg is ignored after initial render
const initalState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
    ] 
}

//Create global context that lets you pass info deep down to other components
export const GlobalContext = createContext(initalState)

// in order for other comp to have access to our global state we need a provider
// Provider component
export const GlobalProvider = ({children}) => {
     
    //when we want to call a action defined in reducer fn we call dispatch 
    const [state,dispatch] = useReducer(Reducer, initalState);

    //value takes transactions as parameter and the way we can access anything in transactions is using (state.)
    //that way we can access transactions state from any component using useContext
    return (<GlobalContext.Provider value={{transactions:state.transactions}}>
        {children}
    </GlobalContext.Provider>) 
}