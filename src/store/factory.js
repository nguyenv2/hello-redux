import C from '../constants';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
   let result;

   // before
   console.groupCollapsed(`displatching action => ${action.type}`);
   console.log('ski days', store.getState().allSkiDays.length);

   // dispatch action
   result = next(action);
   // after
   let { allSkiDays, goal, errors, resortNames } = store.getState();
   console.log(`
      ski days: ${allSkiDays.length}
      goal: ${goal}
      fetching: ${resortNames.fetching}
      suggestions: ${resortNames.suggestions}
      errors: ${errors.length}
   `);
   console.groupEnd();
   return result;
};


export default (initialState={}) => {
   return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
};
