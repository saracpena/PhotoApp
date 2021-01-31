import * as actions from './actionTypes'


export const userAdded = description => ({
   type: actions.USER_ADDED,
   payload: {
   description: "User1"
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