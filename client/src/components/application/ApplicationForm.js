import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmail';
import {applicationFields} from '../form_fields/formFields';
import TextField from '../form_fields/TextField';
import SelectField from '../form_fields/SelectField';


class ApplicationForm extends Component {
  renderFields() {
    return _.map(applicationFields, ({ label, name, type, options, optional }) => {
      if (type === 'select' && !optional) {
        return (
          <Field
            key={name}
            type="select"
            label={label}
            name={name}
            options={options}
            component={SelectField}
          >
          </Field>
        )
      } else if (type !== 'select' && !optional) {
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
  }
  renderOptionalFields() {
    return _.map(applicationFields, ({ label, name, type, options, optional }) => {
      if (type === 'select' && optional) {
        return (
          <Field
            key={name}
            type="select"
            label={label}
            name={name}
            options={options}
            component={SelectField}
          >
          </Field>
        )
      } else if (type !== 'select' && optional) {
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
  }

  render() {
    const { handleSubmit, onApplicationSubmit, submitting} = this.props;

    return (
      <div>
        <h3>Rental Application</h3>
        <p>We only accept online application. All fields are required.</p>
        <form onSubmit={handleSubmit(onApplicationSubmit)}>
          {this.renderFields()}
          {this.props.coApplicant === "Yes" && this.renderOptionalFields()}
          By submitting this application, I/We authorize Ho Property, LLC and/or a third party 
          to conduct an employment/credit check concerning my/our application and to verify all references. 
          I/We declare that all information listed on this application is true and accurate. 
          I/We understand that unclear and/or false information on this application renders this application invalid.
          <div>
          <Link to="/" className="red btn-flat white-text">
            Cancel
          </Link>
          <button disabled={submitting} type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  _.each(applicationFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

ApplicationForm = reduxForm({
  validate,
  form: 'applicationForm',
  destroyOnUnmount: false
})(ApplicationForm);

const selector = formValueSelector('applicationForm')

ApplicationForm = connect(state => {
  let coApplicant = selector(state, 'coApplicant')
  return {
    coApplicant
  }
})(ApplicationForm);

export default ApplicationForm;

