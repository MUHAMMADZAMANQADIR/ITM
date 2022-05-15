import { createContext, useEffect, useReducer } from "react"
import InvesReducer from "./InvesReducer"

const INITIAL_STATE = {
    Investeam: JSON.parse(localStorage.getItem("Investeam")) || null ,
    token: null,
    isFetching: false,
    error: false
}

export const investigationContext = createContext(INITIAL_STATE)

export const InvesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(InvesReducer, INITIAL_STATE)

    //useEffect to get the user saved in the local storage
    useEffect(() => {
        localStorage.setItem("Investeam", JSON.stringify(state.Investeam))
    },[state.user])

    return (
        <investigationContext.Provider value={{
            Investeam: state.Investeam,
            isFetching: state.isFetching,
            error: state.error,
            token: state.token,
            dispatch
        }}>
            {children}
        </investigationContext.Provider>
    )
}

