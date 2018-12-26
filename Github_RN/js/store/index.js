import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
import { middleware } from '../navigator/AppNavigator';

const middleware = [middleware, thunk];

export default createStore(reducers, applyMiddleware(...middleware))