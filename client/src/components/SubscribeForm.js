import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../utils/validateEmail';
import { subscribeFields } from './form_fields/formFields';
import TextField from './form_fields/TextField';
import * as actions from '../actions';

let SubscribeForm = ({ formValues, message, subscribe, history }) => {

  const renderFields = _.map(
    subscribeFields,
    ({ label, name, type, options }) => {
      if (type === 'checkbox') {
        return (
          <div key={name} className="subscribeContainer">
          <p style={{fontSize: '1.1em'}}>Select the county you want to receive updates on: </p>
          <label>{options[1]}</label>
            <Field
              name={options[1]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[2]}</label>            
            <Field
              name={options[2]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[3]}</label>
            <Field
              name={options[3]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[4]}</label>
            <Field
              name={options[4]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[5]}</label>
            <Field
              name={options[5]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[6]}</label>
            <Field
              name={options[6]}
              component="input"
              type={type}
              label={label}
            />
            <br />            
            <label>{options[7]}</label>
            <Field
              name={options[7]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[8]}</label>
            <Field
              name={options[8]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[9]}</label>
            <Field
              name={options[9]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[10]}</label>
            <Field
              name={options[10]}
              component="input"
              type={type}
            />
            <label>{options[11]}</label>
            <Field
              name={options[11]}
              component="input"
              type={type}
            />
            <label>{options[12]}</label>
            <Field
              name={options[12]}
              component="input"
              type={type}
            />
          </div>
        );
      } else {
        return (
          <Field
            key={name}
            component={TextField}
            type={type}
            label={label}
            name={name}
          />
        );
      }
    }
  );

  return (

    <div className="pageContainer">
    <h3>Subscribe to Us</h3>
      <p> We send out e-mail notification when rentals are available in your area of interest. <br />
      Subscribe now and be the first to apply for your future home.</p>
      <div className="applicationFormContainer">
      <form>{renderFields}</form>
      <div className="actionContainer">
      <button
        onClick={() => {
          document.getElementById('submitSubscriptionButton').disabled = true; 
          subscribe(formValues, history);
        }}
        className="forward"
        id="submitSubscriptionButton"
      >
        Subscribe
      </button>
      </div>
      {message.error && <div className="errorMessage">{message.error}</div>}
      {message.success && <div className="successMessage">{message.success}</div>}
      </div>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  _.each(subscribeFields, ({ name, noValueError }) => {

    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
}

function mapStateToProps(state) {
console.log(state)
  return {
    formValues: state.form.subscribeForm.values,
    message: state.message
  };
}

SubscribeForm = connect(mapStateToProps, actions)(SubscribeForm);

SubscribeForm = reduxForm({
  validate,
  form: 'subscribeForm'
})(SubscribeForm);

export default SubscribeForm;
