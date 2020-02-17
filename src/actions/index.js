
import {INCREMENT,DECREMENT,SIGNIN,SIGNOUT} from '../types';


export const increment = () => {

    return {
        type : "INCREMENT"
    }
}

export const decrement = () => {

    return {
        type : DECREMENT
    }
}

export const logout = () => {

    return {
        type : SIGNOUT
    }
}

export const login = () => {

    return {
        type : SIGNIN
    }
}

