// a user action function that receive user as an argument and return an action object...
// ...to a related reducer that called it

import {UserActionTypes} from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});