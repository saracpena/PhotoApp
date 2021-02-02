// [] is representing my Store i.e. data
// When dealing with multiple action types
import * as actions from "./actions/ActionTypes";
import posts from "./UserPosts";
import users from "../redux/Users";

export const initialState = {
  users: users,
  posts: posts,
};

export default function reducer(state = initialState, action) {
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
        user.item !== action.payload.item ? user : { ...user, login: true }
      );
    //add the updated code later
    //return the updated state after adding a comment
    //the action is bringing here the data which needs to be updated -
    //this comment needs to be added in the pictureData.js - pictures.comments - learn the syntax and the procedure
    // return{
    //     pictures[].comments: [...state.pictures[].comments, action.payload];
    // }
    case actions.REMOVE_COMMENT:
      return state.map((user) =>
        user.id !== action.payload.id ? user : { ...user, login: true }
      );
    case actions.ADD_PHOTO:
      return state.map((user) =>
        user.id !== action.payload.id ? user : { ...user, login: true }
      );
    case actions.REMOVE_PHOTO:
      return state.map((user) =>
        user.id !== action.payload.id ? user : { ...user, login: true }
      );
    default:
      return state;
  }
}
