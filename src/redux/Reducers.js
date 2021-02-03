// [] is representing my Store i.e. data
// When dealing with multiple action types
import * as actions from "./actions/ActionTypes";
// JSON files
import posts from "./UserPosts";
import users from "../redux/Users";

export const initialState = {
  users: users,
  posts: posts,
  name:'',
  loggedIn: false,
  comment: true,
  photo: true,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_ADDED:
      return [
        ...state,
        {
          payload: action.payload.item,
          new: true,
        },
      ];

    case actions.USER_LOGIN:
      return state.map((user) =>
        user.item !== action.payload.item ? user : { ...user, login: false }
      );
    case actions.USER_LOGOUT:
      return state.map((user) =>
        user.item !== action.payload.item ? user : { ...user, login: true }
      );
    case actions.USER_REMOVED:
      return this.state.filter((user) => user.item !== action.payload.item);

    case actions.ADD_COMMENT:
      return state.map((user) =>
        user.item !== action.payload.item ? user : { ...user, comment: true }
      );

    case actions.REMOVE_COMMENT:
      return state.map((user) =>
        user.item !== action.payload.item ? user : { ...user, comment: false }
      );
    case actions.ADD_PHOTO:
      return state.map((user) =>
        user.item !== action.payload.item ? user : { ...user, photo: true }
      );
    case actions.REMOVE_PHOTO:
      return state.map((user) =>
        user.item !== action.payload.item ? user : { ...user, photo: true }
      );
    default:
      return state;
  }
}
export default reducers