import storeFactory from './store/factory';
import { suggestResortNames, randomGoals, addDay, removeDay, setGoal } from './actions';

// init store
const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {};
// const store = createStore(appReducer, initialState);

const saveState = () => {
	const state = JSON.stringify(store.getState());
	localStorage['redux-store'] = state;
};



const store = storeFactory(initialState);

store.subscribe(saveState);


// store.dispatch(
// 	randomGoals()
// );
//
// store.dispatch(
// 	randomGoals()
// );

// thunk fetch example
store.dispatch(
	suggestResortNames("hea")
);


// // call action creators
// store.dispatch(
// 	addDay("Heavenly", "2016-12-22")
// );
//
// store.dispatch(
// 	removeDay("2016-12-22")
// );
//
// store.dispatch(
// 	setGoal(55)
// );



// store.dispatch({
// 	type: C.ADD_DAY,
// 	payload: {
// 		"resort": "Mt Shasta",
// 		"date": "2016-10-28",
// 		"powder": true,
// 		"backcountry": true
// 	}
// });
//
// store.dispatch({
// 	type: C.ADD_DAY,
// 	payload: {
// 		"resort": "Squaw Valley",
// 		"date": "2016-3-28",
// 		"powder": true,
// 		"backcountry": false
// 	}
// });
//
// store.dispatch({
// 	type: C.ADD_DAY,
// 	payload: {
// 		"resort": "The Canyons",
// 		"date": "2016-1-2",
// 		"powder": false,
// 		"backcountry": true
// 	}
// });



// const unsubscribeGoalLogger = store.subscribe(() => console.log(`     Goal: ${store.getState().goal}`));
//
// setInterval(() => {
//
// 	store.dispatch({
// 		type: C.SET_GOAL,
// 		payload: Math.floor(Math.random() * 100)
// 	})
//
// },250);
//
// setTimeout(() => {
// 	unsubscribeGoalLogger();
// }, 3000);

// debug
// window.store = store;

// listen for changes
// store.subscribe(() => console.log(store.getState()));

// store.subscribe(() => {
// 	const state = JSON.stringify(store.getState());
// 	localStorage['redux-store'] = state;
// })
