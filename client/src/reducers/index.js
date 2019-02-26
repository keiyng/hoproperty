import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import propertyReducer from './propertyReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  //all keys here are keys of the state object
  properties: propertyReducer,
  form: reduxForm,
  message: messageReducer
});
