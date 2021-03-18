import configureStore from "./store/configureStore";
// import * as actions from "./store/bugs";
import {
  bugAdded,
  bugAssignedToUser,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
const store = configureStore();

// store.dispatch({
//   type: "error",
//   payload: { message: "An error occurred." },
// });

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    method: "get",
    data: {},
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});

// store.dispatch((dispatch, getState) => {
//   // Call an API
//   // When the promise is resolved => dispatch()
//   dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
//   // If the promise is rejected => dispatch()
// });

// store.subscribe(() => {
//   console.log("Store changed !!!!");
// });

// store.dispatch(userAdded({ name: "Alex" }));
// store.dispatch(userAdded({ name: "Mosh" }));
// store.dispatch(projectAdded({ name: "project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log(x === y);
