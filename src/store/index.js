import { createStore } from 'redux';
import clickReducer from '../reducers';

const store = createStore(clickReducer);

export default store;
