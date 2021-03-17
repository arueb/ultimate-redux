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

store.subscribe(() => {
  console.log("Store changed !!!!");
});

store.dispatch(projectAdded({ name: "project 1" }));
store.dispatch(userAdded({ name: "Alex" }));
store.dispatch(userAdded({ name: "Mosh" }));

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log(x === y);
