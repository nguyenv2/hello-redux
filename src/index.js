import C from './constants';
import appReducer from './store/reducers';
// import initialState from './initialState.json';
import { createStore } from 'redux';

const store = createStore(appReducer);

store.subscribe(() => console.log(store.getState()));

// mutate state
store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
});

store.dispatch({
	type: C.SET_GOAL,
	payload: 2
});
