import axios from 'axios';
import { FETCH_PROPERTIES, FETCH_AVAILABLE_DETAILS } from './types';

export const fetchProperties = () => async dispatch => {
  const res = await axios.get('/api/property');

  dispatch({ type: FETCH_PROPERTIES, payload: res.data });
};

export const fetchAvailableDetails = label => async dispatch => {
  const res = await axios.get(`/api/property/${label}`);

  dispatch({ type: FETCH_AVAILABLE_DETAILS, payload: res.data });
};

export const submitApplication = (values, history) => async dispatch => {
  const res = await axios.post('/api/application', values);

  history.push('/');

    dispatch({
    // create an reducer for signed up users
    type: "others",
    payload: res.data
  })

}

export const submitQuery = (values, history) => async dispatch => {
  const res = await axios.post('/api/query', values);
  history.push('/');
    dispatch({
    type: "others",
    payload: res.data
  })

}


// export const submitApplication = (values, history) => async dispatch => {
//   const res = await axios.post('/mailing/application', values);

//   history.push('/');

//   dispatch({
//     type: FETCH_USER,
//     payload: res.data
//   })
// }

// redux thunk inspects value returned from this action

// export const fetchUser = () =>
//   // redux thunks sees a function is returned
//   // redux thunk immediately calls it with dispatch
//   async dispatch => {
//     // ajax request to back-end
//     const res = await axios.get('/api/current_user');
//     // dispatch this action AFTER the axios request is completed
//     dispatch({
//       type: FETCH_USER,
//       payload: res.data
//     });
//   };

// export const handleToken = token => async dispatch => {
//   const res = await axios.post('/api/stripe', token);

//   dispatch({
//     type: FETCH_USER,
//     payload: res.data
//   });
// };

// export const submitSurvey = (values, history) =>async dispatch => {
//   const res = await axios.post('/api/surveys', values);

//   history.push('/surveys');

//   dispatch({
//     type: FETCH_USER,
//     payload: res.data
//   })
// }
