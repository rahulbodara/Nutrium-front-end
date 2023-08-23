import * as Types from "../constants/actionTypes";

const initialState = {
  userData: [],
  clientData: [],
  individualWorkplace: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_DATA:
      return {
        ...state,
        userData: [action.data],
      };
    case Types.CLIENT_DATA:
      return {
        ...state,
        clientData: action.data,
      };
    case Types.GET_INDIVIDUAL_WORKPLACE_SUCCES:
      return {
        ...state,
        individualWorkplace: action.data,
      };
    default:
      return state;
  }
};
