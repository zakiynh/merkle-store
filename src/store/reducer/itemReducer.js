import { ITEMS } from "../actions/actionType";

const initialState = {
    items: []
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}