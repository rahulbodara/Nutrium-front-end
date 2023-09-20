import { combineReducers } from "redux";
import auth from "./auth";
import { Workplace } from "./workplace";
import { Services } from "./profile.services";
import { Secreataries } from "./secretaries";
import { Schedule } from "./schedule";
import { Appointment } from "./appointment";
import { FoodDiaries } from "./foodDiaries";
import { Measurement } from "./measernment";

const rootReducer = combineReducers({
  auth,
  Workplace: Workplace,
  Services: Services,
  Secreataries:Secreataries,
  Schedule:Schedule,
  Appointment:Appointment,
  FoodDiaries:FoodDiaries,
  Measurement:Measurement
});

export default rootReducer;
