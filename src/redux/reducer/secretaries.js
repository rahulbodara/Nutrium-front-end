import * as Types from "../constants/actionTypes";

const initialState = {
    secreatariesData: [],
    individualService: null,
    error: {},
};

export const Secreataries = (state = initialState, action) => {
    switch (action.type) {
        case Types.SECRETARIES_DATA:
            return {
                ...state,
                secreatariesData: action.payload,
            };
        case Types.SECRETARIES_DATA_FAILURE:
            return { ...state, error: action?.payload?.response };
        case Types.GET_INDIVIDUAL_SECRETARIES_SUCCESS:
            return {
                ...state,
                individualService: action.data,
            };
        default:
            return state;
    }
};
