import { createStore } from 'redux';
import reducers from './reducers/combined-reducers';

const Store = createStore(reducers);

export default Store;
