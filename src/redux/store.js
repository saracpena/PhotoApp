import { createStore } from 'redux';
// without using 'export default' I'd have to use {}, i.e. '{ reducer }'
import reducer from '../reducer/reducer'

                         // I am passing this reducer function, not 'calling' it.
const store = createStore(reducer);

// createStore takes a reducer,
// and any number of "middleware" functions
export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() enables
// code to be accessed by the redux extension