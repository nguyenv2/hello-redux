import C from './constants';

require('es6-promise').polyfill();
require('isomorphic-fetch');

// import fetch from 'isomorphic-fetch';


export function addDay(resort, date, powder=false, backcountry=false) {

   // Add app logic here...

   return {
      type: C.ADD_DAY,
      payload: {resort,date,powder,backcountry}
   };
}

export const removeDay = function(date){

   return {
      type: C.REMOVE_DAY,
      payload: date
   };
};

export const setGoal = (goal) =>
   ({
      type: C.SET_GOAL,
      payload: goal
   });

export const addError = (message) =>
   ({
      type: C.ADD_ERROR,
      payload: message
   });

export const clearError = (index) =>
   ({
      type: C.CLEAR_ERROR,
      payload: index
   });

export const changeSuggestions = (suggestions) =>
   ({
      type: C.CHANGE_SUGGESTIONS,
      payload: suggestions
   });


// thunk
// randomGoals() returns thunk
// thunk(dispatch, getState) returns function{}    - thunk() gets dispatch() and getState() injected as arguments
//
export const randomGoals = () => (dispatch, getState) => {

   if (!getState().resortNames.fetching){

      dispatch({
         type: C.FETCH_RESORT_NAMES
      });

      setTimeout(() => {
         dispatch({
            type: C.CANCEL_FETCHING
         });
      }, 1500);

   }

};

// thunk
export const suggestResortNames = value => (dispatch, getState) => {

   dispatch({
      type: C.FETCH_RESORT_NAMES
   });

   console.error('here11 %s', value);

// http://api.wunderground.com/api/xyz-token/conditions/q/CA/San_Francisco.json

   fetch('http://localhost/resorts/'+value,{method:"GET"})
      .then(response => {

         console.error('here2');

         return response.json();
      })
      .then(suggestions => {

         console.error('here3');

         dispatch({
            type: C.CHANGE_SUGGESTIONS,
            payload: suggestions
         });

      })
      .catch(error => {

         console.log('here4');

         dispatch(
            addError(error.messsage)
         );

         console.log('here5');

         dispatch({
            type: C.CANCEL_FETCHING
         });

         console.log('here6');

      });

      console.log('here77');


};
