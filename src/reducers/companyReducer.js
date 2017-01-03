import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function companyReducer(state = initialState.companies, action) {
  switch (action.type) {
    case types.LOAD_COMPANY:
      return action.data;
    default:
      return state;
  }
}
