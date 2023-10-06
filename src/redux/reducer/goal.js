import { removeStyle } from "react-tooltip";
import * as Types from "../constants/actionTypes";

const initialState = {
  goalData: [],
  error: {},
  individualGoal: null,
};

export const Goal = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_GOAL:
      return {
        ...state,
        goalData: action.data,
      };

    case Types.CREATE_GOAL_FAILURE:
      return {
        ...state,
        error: action?.data?.response,
      };

    case Types.GET_GOAL_SUCCESS:
      return {
        ...state,
        individualGoal: action.data,
      };

    case Types.UPDATE_GOAL:
      const updatedGoalDetail = action.data.data;
      const updatedGoalDetails = state.goalData.map((goal) => {
        if (goal._id === updatedGoalDetail._id) {
          return updatedGoalDetail;
        } else {
          return goal;
        }
      });
      return { ...state, goalData: updatedGoalDetails };

      case Types.REMOVE_GOAL:
            return { ...state,  goalData: action.data }

    default:
      return state;
  }
};
