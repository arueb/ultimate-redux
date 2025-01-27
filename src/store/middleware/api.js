import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onSuccess, onError, onStart } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action); // must call before api call
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });
    // general
    dispatch(actions.apiCallSuccess(response.data));
    // specific
    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // general
    dispatch(actions.apiCallFailed(error.message));
    // specific
    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default api;
