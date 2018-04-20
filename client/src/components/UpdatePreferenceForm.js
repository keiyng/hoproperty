import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../utils/validateEmail';
import { subscribeFields } from './form_fields/formFields';
import TextField from './form_fields/TextField';
import * as actions from '../actions';

let UpdatePreferenceForm = ({ formValues, message, updatePreference, submitting }) => {

  const renderFields = _.map(
    subscribeFields,
    ({ label, name, type, options }) => {
      if (type === 'checkbox') {
        return (
          <div key={name} className="subscribe-container">
          <p style={{fontWeight: 'bold'}}>Re-select your preferences: </p>
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
      }
    }
  );

  return (
    <div style={{textAlign: 'center', padding: '15px', backgroundColor: '#fafafa', opacity: '0.85'}}>
      <form>
        <Field
          component={TextField}
          type="email"
          name="email"
          label="Email:"
        />
        {renderFields}
      </form>
      <button
        onClick={() => updatePreference(formValues)}
        disabled={submitting}
        className="btn btn-info"
        style={{marginTop: '15px'}}
      >
        Update
      </button>
      {message.error && <div style={{color: 'red'}}>{message.error}</div>}
      {message.success && <div style={{color: 'green'}}>{message.success}</div>}
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
    formValues: state.form.updatePreferenceForm.values,
    message: state.message
  };
}

UpdatePreferenceForm = connect(mapStateToProps, actions)(UpdatePreferenceForm);

UpdatePreferenceForm = reduxForm({
  validate,
  form: 'updatePreferenceForm',
})(UpdatePreferenceForm);

export default UpdatePreferenceForm;
