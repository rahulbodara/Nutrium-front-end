import * as Types from "../constants/actionTypes";

const initialState = {
  workplaceData: [],
  error: {},
  individualWorkplace: null,
};

export const Workplace = (state = initialState, action) => {
  switch (action.type) {
    case Types.WORKPLACE_DATA:
      return {
        ...state,
        workplaceData: action.payload,
      };
    case Types.WORKPLACE_DATA_FAILURE:
      return { ...state, error: action?.payload?.response };
    case Types.GET_INDIVIDUAL_WORKPLACE_SUCCES:
      return {
        ...state,
        individualWorkplace: action.data,
      };
    case Types.EDIT_WORKPLACE_SUCCESS:
      const updatedWorkplaceDetail = action.payload;
      const updatedWorkplaceDetails = state.workplaceData.map((workplace) => {
        if (workplace._id === updatedWorkplaceDetail._id) {
          return updatedWorkplaceDetail;
        } else {
          return workplace;
        }
      });
      return { ...state, workplaceData: updatedWorkplaceDetails };
    default:
      return state;
  }
};
