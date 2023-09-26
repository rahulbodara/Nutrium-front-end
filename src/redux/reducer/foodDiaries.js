import * as Types from "../constants/actionTypes";

const initialState = {
    foodDiariesData: [],
    // individualService: null,
    error: {},
};

export const FoodDiaries = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_FOOD:
            return {
                ...state,
                foodDiariesData: action.data,
            };
        case Types.GET_ALL_FOODS:
            return {
                ...state,
                foodDiariesData: action.data.foodDiaries,
            };
        case Types.UPDATE_FOOD:
            const updateFood = action.data.data;
            const updatedFoodDetails = state.servicesData.map((services) => {
                if (services._id === updateFood._id) {
                    return updateFood;
                } else {
                    return services
                }
            });
            return { ...state, servicesData: updatedFoodDetails };
        case Types.CREATE_FOOD_FAILURE:
            return { ...state, error: action?.data?.response };
        // case Types.GET_INDIVIDUAL_SECRETARIES_SUCCESS:
        //     return {
        //         ...state,
        //         individualService: action.data,
        //     };
        // case Types.UPDATE_SECRETARIES:
        //     const updatedSecretariesDetails = action.data.data;
        //     const updatedSecretaries = state.secreatariesData.map((secretaries) => {
        //         if (secretaries._id === updatedSecretariesDetails._id) {
        //             return updatedSecretariesDetails;
        //         } else {
        //             return secretaries;
        //         }
        //     });
        //     return { ...state, secreatariesData: updatedSecretaries };
        // case Types.REMOVE_SECRETARIES:
        //     return { ...state, secreatariesData: action.data }
        default:
            return state;
    }
};
