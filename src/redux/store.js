// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./reducer/rootReducer";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//     key: "root",
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
// export const persistor = persistStore(store);
// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Workplace","Services","Secreataries","auth","Goal", "Event", "Measurement"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);

export default store;
