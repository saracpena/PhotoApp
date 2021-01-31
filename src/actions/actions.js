import * as actions from './actions/actionTypes'


export const userAdded = description => ({
   type: actions.USER_ADDED,
   payload: {
   description
 }
})
// description : "User1"
export const userLogin = id => ({
    type: actions.USER_LOGIN,
    payload: {
       id
    }
})

// export default function userAdded(description){
//     return {
//      type: actions.USER_ADDED,
//      payload: {
//          description: "User1"
//      }
//     };
// }