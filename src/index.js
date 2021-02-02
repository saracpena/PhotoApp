import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { userAdded, userLogin } from './redux/actions/Actions'
import store from './redux';
import App from './Pages/App/App';
import { Provider } from 'react-redux';



// const store = createStore(reducer);//already imported

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

