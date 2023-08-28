import { combineReducers } from "redux";
import auth from "./auth";
import { Workplace } from "./workplace";
import { Services } from "./profile.services";

const rootReducer = combineReducers({
  auth,
  Workplace: Workplace,
  Service: Services,
});

export default rootReducer;
