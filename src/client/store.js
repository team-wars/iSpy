import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/combined-reducers';

const Store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
