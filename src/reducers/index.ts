import { combineReducers } from 'redux'
import { UPDATE_CLICK_COUNT } from "../actions";

const updateClickCount = (state = { count: 0 }, action: Record<string, any>) => {
    switch (action.type) {
        case UPDATE_CLICK_COUNT:
            return {
                ...state,
                count: state.count + action.count
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    updateClickCount,
})

export default rootReducer
