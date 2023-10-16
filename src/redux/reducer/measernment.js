import * as Types from "../constants/actionTypes";

const initialState = {
    measurementData: [],
    clientId: '',
    error: null,
};

export const Measurement = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_MEASUREMENTS:
            return {
                ...state,
                measurementData: [...state.measurementData,action.data],
                error: null,
            };
        case Types.MEASUREMENTS_DATA:
            return {
                ...state,
                measurementData: [action.data],
                error: null,
            };
        case Types.CLIENT_ID:
            return {
                ...state,
                clientId: action.data
            }
        default:
            return state;
    }
};
