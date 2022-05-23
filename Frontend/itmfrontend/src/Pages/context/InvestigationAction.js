export const LoginStart = () => ({
    type: 'LOGIN_START'
})

export const LoginSuccess = (Investeam , token) => ({
    type: 'LOGIN_SUCCESS',
    payload: Investeam,
    token:token
})
export const UPDATE = (Investeam) => ({
    type: 'UPDATE',
    payload: Investeam
})
export const LoginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
})

export const AuthToken = (token) => ({
    type: 'AUTHTOKEN',
    payload: token
})

export const Logout = () => ({
    type: 'LOGOUT'
})