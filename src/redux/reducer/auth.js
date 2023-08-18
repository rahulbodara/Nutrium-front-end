import * as Types from "../constants/actionTypes";

const initialState = {
    userData: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.USER_DATA:
            return {
                ...state,
                userData: [action.data]
            }
        default:
            return state;
    }
};

