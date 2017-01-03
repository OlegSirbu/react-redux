import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function flightsReducer(state = initialState.flights, action) {
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return action.data.flights;
    case types.LOAD_DATA_ERROR:
      return state;
    default:
      return state;
  }
}
