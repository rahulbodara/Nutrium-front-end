import * as Types from "../constants/actionTypes";

const initialState = {
  workplaceData: [],
  error: {},
  individualWorkplace: null,
};

export const Workplace = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_WORKPLACE:
      console.log(action.data,"actionaction");
      return {
        ...state,
        workplaceData: action.data,
      };
    case Types.CREATE_WORKPLACE_FAILURE:
      return { ...state, error: action?.data?.response };
    case Types.GET_INDIVIDUAL_WORKPLACE_SUCCES:
      return {
        ...state,
        individualWorkplace: action.data,
      };
    case Types.UPDATE_WORKPLACE:
      const updatedWorkplaceDetail = action.data.data;
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
