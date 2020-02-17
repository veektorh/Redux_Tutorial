import authReducer from './auth'
import counterReducer from './counter'

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counterReducer,
    authReducer
})

export default allReducers;