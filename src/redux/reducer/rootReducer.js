import { combineReducers } from "redux";
import auth from "./auth";
import { Workplace } from "./workplace";
import { Services } from "./profile.services";
import { Secreataries } from "./secretaries";

const rootReducer = combineReducers({
  auth,
  Workplace: Workplace,
  Services: Services,
  Secreataries:Secreataries
});

export default rootReducer;
