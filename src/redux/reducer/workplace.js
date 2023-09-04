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
        workplaceData: action.data,
      };
    case Types.WORKPLACE_DATA_FAILURE:
      return { ...state, error: action?.data?.response };
    case Types.GET_INDIVIDUAL_WORKPLACE_SUCCES:
      return {
        ...state,
        individualWorkplace: action.data,
      };
    case Types.UPDATE_WORKPLACE:
      const updatedWorkplaceDetail = action.data.data;
      console.log('action.data', action.data);
      const updatedWorkplaceDetails = state.workplaceData.map((workplace) => {
        if (workplace._id === updatedWorkplaceDetail._id) {
          return updatedWorkplaceDetail;
        }else{
          return workplace
        }
      });
      return { ...state, workplaceData: updatedWorkplaceDetails };
      case Types.REMOVE_WORKPLACE:
        return { ...state, workplaceData: action.data }
    default:
      return state;
  }
};
