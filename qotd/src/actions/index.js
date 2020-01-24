import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
export const fetchActivity = () => dispatch => {
  dispatch({ type: FETCHING_ACTIVITY_START });
  axios
    .get('https://quote-garden.herokuapp.com/quotes/random')
    .then(res => {
      //res.data ==> activity
      dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};
