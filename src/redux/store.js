import { combineReducers, createStore } from "redux";
import TableReducer from "./Table/TableReducer";
import RequestReducer from "./Request/RequestReducer";

const reducers = combineReducers({
  table: TableReducer,
  request: RequestReducer,
});

const store = createStore(reducers);

export default store;
