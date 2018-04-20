
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../utils/validateEmail';
import * as actions from '../actions';

let UnsubscribeForm = ({ formValues, message, unsubscribe, submitting }) => {

  return (
    <div>
      <form>
          Please enter your e-mail to unsubscribe:
          <div>
        <Field
          key="unsubscribe"
          component="input"
          type="email"
          name="email"
        />
        </div>
      </form>
      {message.error && <div style={{color: 'red', marginBottom: '10px'}}>{message.error}</div>}
      {message.success && <div style={{color: '#000', marginBottom: '10px', fontWeight: 'bold'}}>{message.success}</div>}
      <button
        onClick={() => unsubscribe(formValues)}
        disabled={submitting}
        className="btn btn-secondary"
        style={{marginTop: '15px'}}
      >
        Unsubscribe
      </button>
    </div>
  );
};

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  return errors;
}

function mapStateToProps(state) {
  return {
    formValues: state.form.unsubscribeForm.values,
    message: state.message
  };
}

UnsubscribeForm = connect(mapStateToProps, actions)(UnsubscribeForm);

UnsubscribeForm = reduxForm({
  validate,
  form: 'unsubscribeForm'
})(UnsubscribeForm);

export default UnsubscribeForm;
