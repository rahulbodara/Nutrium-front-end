import * as Types from "../constants/actionTypes";

const initialState = {
  userData: [],
  clientData: [],
  eatingBehaviour: [],
  observationBehaviour: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.USER_DATA:
      return {
        ...state,
        userData: [action.data],
        error: null,
      };
    case Types.CLIENT_DATA:
      return {
        ...state,
        clientData: action.data,
        error: null,
      };
    case Types.CLIENT_BY_ID:
      return {
        ...state,
        clientData: action.data,
        error: null,
      };
    case Types.EATING_BEHAVIOUR:
      return {
        ...state,
        eatingBehaviour: action.data,
        error: null,
      };
    case Types.OBSERVATION_BEHAVIOUR:
      return {
        ...state,
        observationBehaviour: action.data,
        error: null,
      }
    case Types.OBSERVATION_DATA:
      return {
        ...state,
        observationBehaviour: action.data,
        error: null,
      }
    case Types.OBSERVATION_BY_ID:
      return {
        ...state,
        observationBehaviour:action.data,
        error: null,
      }
    case Types.UPDATE_OBSERVATION:
      return {
        ...state,
        observationBehaviour: action.data,
        error: null,
      }
    case Types.USER_DATA:
    case Types.CLIENT_DATA_FAILURE:
    case Types.EATING_BEHAVIOUR_FAILURE:
    case Types.OBSERVATION_BAHAVIOUR_FAILURE:
    case Types.OBSERVATION_DATA_FAILURE:
    case Types.OBSERVATION_BY_ID_FAILURE:
    case Types.UPDATE_OBSERVATION_FAILURE:
    case Types.CLIENT_BY_ID_FAILURE:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};
