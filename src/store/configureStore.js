// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";

// import reducer from "./bugs";
import reducer from "./reducer";

export default function () {
  //   const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  // calling this function returns a redux store
  return configureStore({ reducer });
}
