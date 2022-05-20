import { createContext, useEffect, useReducer } from "react"
import CasesReducer from "./CasesReducer"

const INITIAL_STATE = {
    Cases:  JSON.parse(localStorage.getItem("Cases")) || null ,
    isFetching: false,
    error: false
}

export const CasesContext = createContext(INITIAL_STATE)

export const CasesContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CasesReducer, INITIAL_STATE)

    //useEffect to get the user saved in the local storage
    useEffect(() => {
        localStorage.setItem("Cases", JSON.stringify(state.Cases))
    },[state.Cases])

    return (
        <CasesContext.Provider value={{
            Cases: state.Cases,
            isFetching: state.isFetching,
            error: state.error,
            token: state.token,
            dispatch
        }}>
            {children}
        </CasesContext.Provider>
    )
}

