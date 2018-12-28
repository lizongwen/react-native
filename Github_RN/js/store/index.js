import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
import { middleware } from '../navigator/AppNavigator';

const logger = store => next => action => {
	if (typeof action === 'function') {
		console.log('dispatching a function')
	} else {
		console.log('dispatching a function');
	}
	const result = next(action);
	console.log('nextState', store.getState())
}

const middlewares = [middleware, logger, thunk];
const store = createStore(reducers, applyMiddleware(...middlewares))
console.log(store.getState())
// export default store;
export default store