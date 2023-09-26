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
                secreatariesData: action.data,
            };
        case Types.SECRETARIES_DATA_FAILURE:
            return { ...state, error: action?.data?.response };
        case Types.GET_INDIVIDUAL_SECRETARIES_SUCCESS:
            return {
                ...state,
                individualService: action.data,
            };
        case Types.UPDATE_SECRETARIES:
            const updatedSecretariesDetails = action.data.data;
            const updatedSecretaries = state.secreatariesData.map((secretaries) => {
                if (secretaries._id === updatedSecretariesDetails._id) {
                    return updatedSecretariesDetails;
                } else {
                    return secretaries;
                }
            });
            return { ...state, secreatariesData: updatedSecretaries };
        case Types.REMOVE_SECRETARIES:
            return { ...state, secreatariesData: action.data }
        default:
            return state;
    }
};
