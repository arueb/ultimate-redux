// import { createStore, applyMiddleware } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./bugs";
import reducer from "./reducer";
import logger from "./middleware/logger";

export default function () {
  //   const store = createStore(reducer, applyMiddleware(logger), devToolsEnhancer({ trace: true }));
  // calling this function returns a redux store
  return configureStore({
    reducer,
    middleware: [logger("console")],
  });
}
