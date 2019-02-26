import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../utils/validateEmail';
import { queryFields } from './form_fields/formFields';
import TextField from './form_fields/TextField';
import TextareaField from './form_fields/TextareaField';
import * as actions from '../actions';

let QueryForm = ({
  formValues,
  formFields,
  submitQuery,
  message,
  history
}) => {
  const renderFields = _.map(queryFields, ({ label, name, type }) => {
    if (type === 'textarea') {
      return (
        <Field
          key={name}
          component={TextareaField}
          type={type}
          label={label}
          name={name}
        />
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
  });

  return (
    <div className="pageContainer">
      <h3>Contact Us</h3>
      <p>
        P.O. Box 28, Cedar Grove, NJ 07009 <br />Monday - Friday 9:00am to
        5:00pm
      </p>
      <div>
        <form>{renderFields}</form>
        <div className="actionContainer">
          <button
            onClick={() => {
              document.getElementById('submitQueryButton').disabled = true;
              submitQuery(formValues, history);
            }}
            className="forward"
            id="submitQueryButton"
            disabled={
              !formValues ||
              Object.keys(formValues).length < Object.keys(formFields).length
            }
          >
            Send
          </button>
        </div>
        {message.error && <div className="errorMessage">{message.error}</div>}
        {message.success && (
          <div className="successMessage">{message.success}</div>
        )}
      </div>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  _.each(queryFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });
  return errors;
}

function mapStateToProps(state) {
  console.log(state.form.queryForm.values);
  console.log('type', typeof state.form.queryForm.values);
  console.log('state::', state);
  return {
    formFields: state.form.queryForm.registeredFields,
    formValues: state.form.queryForm.values,
    message: state.message
  };
}

QueryForm = connect(mapStateToProps, actions)(QueryForm);

QueryForm = reduxForm({
  validate,
  form: 'queryForm'
})(QueryForm);

export default QueryForm;


