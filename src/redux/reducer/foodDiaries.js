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
            const updateFood = action.data.data.EatingBehaviour;
            console.log(updateFood,"updatefoodddd");
            const updatedFoodDetails = state.foodDiariesData.map((foodDiaries) => {
                console.log(foodDiaries,updateFood,"updateFoodupdateFoodupdateFood");
                if (foodDiaries._id === updateFood._id) {
                    return updateFood;
                } else {
                    return foodDiaries
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
        case Types.REMOVE_FOOD:
            return { ...state, foodDiariesData: action.data }
        default:
            return state;
    }
};
