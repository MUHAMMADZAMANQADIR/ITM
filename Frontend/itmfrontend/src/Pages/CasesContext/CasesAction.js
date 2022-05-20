export const NotLoading = () => ({
    type: 'NotLoading'
})

export const isLoading = (Cases) => ({
    type: 'isLoading',
    payload: Cases
})

export const Loading_FAILURE = (error) => ({
    type: 'Loading_FAILURE',
    payload: error
})

export const Logout = () => ({
    type: 'LOGOUT'
})