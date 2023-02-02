import { combineReducers } from 'redux'
import { UPDATE_CLICK_COUNT } from "../actions";

export interface MyState {
    count: number;
}

export interface MyAction extends MyState {
    type: `${UPDATE_CLICK_COUNT}`,
}

const updateClickCount = (state: MyState = { count: 0 }, action: MyAction) => {
    switch (action.type) {
        case UPDATE_CLICK_COUNT:
            return {
                ...state,
                count: state.count + action.count,
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    updateClickCount,
})

export default rootReducer
