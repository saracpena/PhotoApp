import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store'
import './index.css';
import { userAdded } from './actions/actions'
import App from './pages/App/App';

store.dispatch(userAdded("User1"));

// subscribe gives updates, getState gets 'new' status
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
})

// when user "registers" we dispatch action to add into store
store.dispatch({
  type:"userAdded",
  payload: {
    description:"User1"
  }
});

// prevents info leakage
unsubscribe();
store.dispatch({
  type:"userRemoved",
  payload:{
    id: 1
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

