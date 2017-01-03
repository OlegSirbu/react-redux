import * as types from './actionsTypes';

export function loadFlightsSuccess(data) {
  return {type: types.LOAD_DATA_SUCCESS, data};
}

export function loadFlightsError(data) {
  return {type: types.LOAD_DATA_ERROR, data};
}

export function loadFlights() {
  return (dispatch) => {
    let url = `data.json`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        dispatch(loadFlightsSuccess(data));
      })
      .catch((error) => {
        dispatch(loadFlightsError({error: 'No Data'}));
        console.error(error);
      });
  }
}