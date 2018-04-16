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
    type: 'others',
    payload: res.data
  });
};

export const submitQuery = (values, history) => async dispatch => {
  const res = await axios.post('/api/query', values);
  history.push('/');
  dispatch({
    type: 'others',
    payload: res.data
  });
};

export const subscribe = (values, history) => async dispatch => {
  const res = await axios.post('/api/subscribe', values);
  history.push('/');
  dispatch({
    type: 'others',
    payload: res.data
  });
}

export const unsubscribe = (values) => async dispatch => {
  const res = await axios.post('/api/unsubscribe', values);

  dispatch({
    type: 'others',
    payload: res.data
  });
}