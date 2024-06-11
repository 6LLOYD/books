import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducerAddBooks from "./reducers/reducerAddBooks";
import reducerFetchedBooks from "./reducers/reducerFetchBooks";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  library: reducerAddBooks,
  search: reducerFetchedBooks,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});

export default store;
