// [] is representing my Store i.e. data
// When dealing with multiple action types
import * as actions from "./actions/actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.USER_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          new: true,
        },
      ];
    case actions.USER_REMOVED:
      return store.filter((user) => user.id !== action.payload.id);

    case actions.USER_LOGIN:
      return state.map((user) =>
        user.id !== action.payload.id ? user : { ...user, login: false }
      );

    case actions.USER_LOGOUT:
      return state.map((user) =>
        user.id !== action.payload.id ? user : { ...user, login: true }
      );

    default:
      return state;
  }
}
