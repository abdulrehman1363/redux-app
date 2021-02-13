import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './icecream/iceCreamReducer'
import userReducer from './users/userReducer'

export const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    users : userReducer
})