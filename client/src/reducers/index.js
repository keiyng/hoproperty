import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import propertyReducer from './propertyReducer';

export default combineReducers({
  //all keys here are the keys of the state object
  properties: propertyReducer,
  form: reduxForm
});
