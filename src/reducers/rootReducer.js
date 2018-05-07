/**
 * Created by stb on 2018/1/30.
 */
import { combineReducers } from 'redux'
import firstReducer from './firstReducer.js'
const rootReducer = combineReducers({
    firstState:firstReducer
})

export default rootReducer