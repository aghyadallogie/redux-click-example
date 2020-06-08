import { createStore } from 'redux';
import clickReducer from '../reducers/clickReducer';

const store = createStore(clickReducer);

export default store;
