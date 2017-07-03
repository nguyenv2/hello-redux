import C from './constants';
import appReducer from './store/reducers';
import initialState from './initialState.json';

let state = initialState

console.log(`

	Initial state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)


state = appReducer(state, {
	type: C.SET_GOAL,
	payload: 2
});

state = appReducer(state, {
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
});

state = appReducer(state, {
	type: C.CHANGE_SUGGESTIONS,
	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
})




console.log(`

	Next state
	=============
	goal: ${state.goal}
	resorts: ${JSON.stringify(state.allSkiDays)}
	fetching: ${state.resortNames.fetching}
	suggestions: ${state.resortNames.suggestions}

`)








/*
const state = [
	{
		"resort": "Kirkwood",
		"date": "2016-12-15",
		"powder": true,
		"backcountry": false
	},{
		"resort": "Boreal",
		"date": "2016-12-16",
		"powder": false,
		"backcountry": false
	}
];

const action = {
	type: C.REMOVE_DAY,
	payload: "2016-12-15"
};
*/


/*
const state = [
	"user not authorized",
	"server feed not found"
]

const action = {
	type: C.CLEAR_ERROR,
	payload: 0
}

const action = {
	type: C.ADD_ERROR,
	payload: "cannot connect to server"
}
*/

/*
const nextState = allSkiDays(state, action);

console.log(`

	initial goal: ${JSON.stringify(state)}
	action: ${JSON.stringify(action)}
	new state: ${JSON.stringify(nextState)}

`)
*/





/*
const state = null;

const action = {
	type: C.ADD_DAY,
	payload: {
		"resort": "Heavenly",
		"date": "2016-12-16",
		"powder": true,
		"backcountry": false
	}
}

const nextState = skiDay(state, action);

console.log(`

	initial goal: ${state}
	action: ${JSON.stringify(action)}
	new state: ${JSON.stringify(nextState)}

`)
*/











/*
import { goal } from './store/reducers'

const state = 10;

const action = {
	type: C.SET_GOAL,
	payload: 15
}

const nextState = goal(state, action);

console.log(`

	initial goal: ${state}
	action: ${JSON.stringify(action)}
	new goal: ${nextState}

`)
*/














/*
import { allSkiDays, goal } from './initialState.json'

console.log(`hello van ${goal}`);


console.log(`

	Ski Day Counter
	================
	The goal is ${goal} allSkiDays
	Initially there are ${allSkiDays.length} ski days in initialState

	Constants (actions)
	-------------------
	${Object.keys(C).join('\n     ')}
`);
*/
