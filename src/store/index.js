import {createStore} from '../redux';

import reducer from './reducer';

let store = createStore(reducer);
window._store = store;
export default store;