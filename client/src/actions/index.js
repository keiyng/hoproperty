import axios from 'axios';
import { FETCH_PROPERTIES, FETCH_AVAILABLE_DETAILS, FETCH_MESSAGE } from './types';

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

  dispatch({
    type: FETCH_MESSAGE,
    payload: res.data
  });
};

export const submitQuery = (values, history) => async dispatch => {
  const res = await axios.post('/api/query', values);

  dispatch({
    type: FETCH_MESSAGE,
    payload: res.data
  });
};

export const subscribe = (values, history) => async dispatch => {
  const res = await axios.post('/api/subscribe', values)

  dispatch({
    type: FETCH_MESSAGE,
    payload: res.data
  });
}

export const updatePreference = (values, history) => async dispatch => {
    const res = await axios.patch('/api/update_preference', values);

    dispatch({
      type: FETCH_MESSAGE,
      payload: res.data
    });
}


export const unsubscribe = (values) => async dispatch => {
  const res = await axios.delete(`/api/unsubscribe/${values.email}`, values);

  dispatch({
    type: FETCH_MESSAGE,
    payload: res.data
  });
}
