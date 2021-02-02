import * as actions from './ActionTypes'

//! REGISTER Successful
export const userAdded = item => ({
   type: actions.USER_ADDED,
   payload: item
})
//! LOGIN Successful
export const userLogin = item => ({
    type: actions.USER_LOGIN,
    payload: item
})

//! LOGOUT Successful

export const userLogout = item => ({
   type: actions.USER_LOGOUT,
   payload: item
})

//! DELETE Account

export const userRemoved = item => ({
   type: actions.USER_REMOVED,
   payload: item
})

//! ADD Comment
// export const ADD_COMMENT = 'addComment'

export const addComment = item => ({
    type: actions.ADD_COMMENT,
    payload: item
})

//! REMOVE Comment
// export const REMOVE_COMMENT = 'deleteComment'

export const removeComment = item => ({
    type: actions.REMOVE_COMMENT,
    payload: item
})

//! ADD Photo
// export const ADD_PHOTO = 'addPhoto'

// ACTION CREATOR 
export const addPhoto = (item) => ({
    type: actions.ADD_PHOTO,
    payload: item
})
//! REMOVE Photo
// export const REMOVE_PHOTO = 'removePhoto'

// ACTION CREATOR 
export const removePhoto = (item) => ({
    type: actions.REMOVE_PHOTO,
    payload: item
})

// Another way to    
// export default function userAdded(description){
//     return {
//      type: actions.USER_ADDED,
//      payload: {
//          description: "User1"
//      }
//     };
// }