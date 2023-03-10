import { combineReducers } from "redux";
import user from "./user";
import status from "./status";

const rootReducer = combineReducers({
    user,
    status
});

export default rootReducer;