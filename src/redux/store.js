import { createStore } from 'redux'
// without using 'export default' I'd have to use {}, i.e. '{ reducer }'
import reducer from '../reducer/reducer'

                         // I am passing this reducer function, not 'calling' it.
const store = createStore(reducer);

export default store