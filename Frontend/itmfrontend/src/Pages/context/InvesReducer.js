const InvesReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                Investeam: null,
                isFetching: true,
                error: false
            }
        case 'LOGIN_SUCCESS':
            return {
                Investeam: action.payload,
                token: action.token,
                isFetching: false,
                error: false
            }
        case 'LOGIN_FAILURE':
            return {
                Investeam: null,
                isFetching: false,
                error: action.payload              
            }
        case 'UPDATE':
            return {
                Investeam: action.payload,
                isFetching: false,            
            }    
        case 'AUTH_TOKEN':
            return {
                token: action.payload
            }
        case 'LOGOUT': 
            return {
                Investeam: null,
                isFetching: false,
                error: false,
                token: null
            }
        default:
            return state
    }
}

export default InvesReducer