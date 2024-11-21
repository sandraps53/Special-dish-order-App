import { createContext, useReducer } from "react"

const DispatchContext = createContext()
const StateContext = createContext()

const AppProvider = ({children})=> {
    
    
    const initialState = {
        cartItems : []
    }

    const reducer = (state, action)=>{
        
        switch(action.type) {
            case "add_to_cart":
                return {
                    ...state,
                    cartItems:[action.payload.img, action.payload.title],
                };
                default:{
                   return state 
                }
        }
    }

    let [state,dispatch] = useReducer(reducer, initialState)
    console.log("This is the state", state);
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )

}

export {AppProvider , StateContext, DispatchContext};