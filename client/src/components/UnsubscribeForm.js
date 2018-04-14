
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../utils/validateEmail';
import * as actions from '../actions';

let UnsubscribeForm = ({ formValues, unsubscribe, submitting }) => {

  return (
    <div>
      <form>
          Please enter your e-mail to finish the unsubscribe process:
          <div>
        <Field
          key="unsubscribe"
          component="input"
          type="email"
          name="email"
        />
        </div>
      </form>
      <button
        onClick={() => unsubscribe(formValues)}
        disabled={submitting}
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
    formValues: state.form.unsubscribeForm.values
  };
}

UnsubscribeForm = connect(mapStateToProps, actions)(UnsubscribeForm);

UnsubscribeForm = reduxForm({
  validate,
  form: 'unsubscribeForm'
})(UnsubscribeForm);

export default UnsubscribeForm;
