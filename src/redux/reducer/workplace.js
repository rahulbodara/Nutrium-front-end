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
    default:
      return state;
  }
};
