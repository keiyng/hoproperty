import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../utils/validateEmail';
import { subscribeFields } from './form_fields/formFields';
import TextField from './form_fields/TextField';
import * as actions from '../actions';

let SubscribeForm = ({ formValues, subscribe, submitting, history }) => {
  const renderFields = _.map(
    subscribeFields,
    ({ label, name, type, options }) => {
      if (type === 'checkbox') {
        return (
          <div key={name}>
            <Field
              name={options[1]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[1]}</label>
            <Field
              name={options[2]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[2]}</label>
            <Field
              name={options[3]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[3]}</label>
            <Field
              name={options[4]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[4]}</label>
            <Field
              name={options[5]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[5]}</label>
            <Field
              name={options[6]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[6]}</label>
            <Field
              name={options[7]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[7]}</label>
            <Field
              name={options[8]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[8]}</label>
            <Field
              name={options[9]}
              component="input"
              type={type}
              label={label}
            />
            <label>{options[9]}</label>
            <Field
              name={options[10]}
              component="input"
              type={type}
            />
            <label>{options[10]}</label>
            <Field
              name={options[11]}
              component="input"
              type={type}
            />
            <label>{options[11]}</label>
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
    <div>
      <form>{renderFields}</form>
      <button
        onClick={() => subscribe(formValues, history)}
        disabled={submitting}
      >
        Subscribe
      </button>
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
  return {
    formValues: state.form.subscribeForm.values
  };
}

SubscribeForm = connect(mapStateToProps, actions)(SubscribeForm);

SubscribeForm = reduxForm({
  validate,
  form: 'subscribeForm'
})(SubscribeForm);

export default SubscribeForm;
