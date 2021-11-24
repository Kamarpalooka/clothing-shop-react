// a user action function that receive user as an argument and return an action object...
// ...to a related reducer that called it
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});