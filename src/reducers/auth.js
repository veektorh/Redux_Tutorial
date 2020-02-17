
import { SIGNIN,SIGNOUT } from '../types/index'
import { INCREMENT, DECREMENT } from '../types/index'

const authReducer = (state = true, action) => {
    switch (action.type) {
        case SIGNIN:
            return state = true;
        case SIGNOUT:
            state = false;
            return state;
        default:
            return state;
    }
}


export default authReducer;