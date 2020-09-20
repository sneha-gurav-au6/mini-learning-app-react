import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducers";
import thunk from "redux-thunk";
// import user from "./reducers/userReducer";
// const store = createStore(user, composeWithDevTools(applyMiddleware(thunk)));

// export default store;
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store