const CasesReducer = (state, action) => {
    switch (action.type) {
        case "NotLoading":
            return {
                Cases: null,
                isFetching: true,
                error: false
            }
        case 'isLoading':
            return {
                Cases: action.payload,
                isFetching: false,
                error: false
            }
        case 'Loading_FAILURE':
            return {
                Cases: null,
                isFetching: false,
                error: action.payload              
            }
        case 'LOGOUT': 
            return {
                Cases: null,
                isFetching: false,
                error: false,
            }
        default:
            return state
    }
}

export default CasesReducer