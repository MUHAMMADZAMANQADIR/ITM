export const LoginStart = () => ({
    type: 'LOGIN_START'
})

export const LoginSuccess = (Investeam) => ({
    type: 'LOGIN_SUCCESS',
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