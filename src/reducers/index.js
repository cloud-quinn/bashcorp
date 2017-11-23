import {combineReducers} from 'redux'

const defaultReducer = (state = [], action) => {
    return state
}

const bashCorp = combineReducers({
    defaultReducer
})

export default bashCorp