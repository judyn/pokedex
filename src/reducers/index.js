import { combineReducers } from 'redux';
import ADD_POKEMON from '../actions';

function teams( state = [], action){
  switch (action.type) {
    case ADD_POKEMON:
      return [
        ...state,
        {
          name: action.name
        }
      ]
      default: 
        return state
  }
}

const teamApp = combineReducers({
  teams
});

export default teamApp;