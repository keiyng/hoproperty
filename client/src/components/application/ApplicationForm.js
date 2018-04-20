import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmail';
import {applicationFields} from '../form_fields/formFields';
import TextField from '../form_fields/TextField';
import SelectField from '../form_fields/SelectField';
import TextareaField from '../form_fields/TextareaField';


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
      } else if (type !== 'select' && type !== 'textarea' && !optional) {
        return (
          <Field
            key={name}
            component={TextField}
            type={type}
            label={label}
            name={name}
          />
        );
      } else if (type === 'textarea') {
        return (
          <Field
            key={name}
            component={TextareaField}
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
        <div style={{marginTop: '10px'}}>
        <h3 style={{fontWeight: 'bold'}}>Rental Application</h3>
        <p><em>We only accept online application. All fields are required.</em></p>
        </div>
        <div style={{backgroundColor: '#fafafa', opacity: '0.85', paddingTop: '10px'}}>
        <form onSubmit={handleSubmit(onApplicationSubmit)}>
          {this.renderFields()}
          {this.props.coApplicant === "Yes" && this.renderOptionalFields()}
          <p style={{padding: '0 40px', fontSize: 'smaller'}}><em>By submitting this application, I/We authorize Ho Property, LLC and/or a third party 
          to conduct an employment/credit check concerning my/our application and to verify all references. 
          I/We declare that all information listed on this application is true and accurate. 
          I/We understand that unclear and/or false information on this application renders this application invalid.</em></p>
          <div style={{paddingBottom: '25px'}}>
          <button className='btn btn-secondary' style={{marginRight: '20px'}}><Link to="/" style={{color: '#fff'}}>
            Cancel
          </Link>
          </button>
          <button disabled={submitting} type="submit" className="btn btn-info">
            Next
            <span className="oi oi-arrow-thick-right" style={{marginLeft: '5px'}}></span>
          </button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.email = validateEmails(values.email || '');

  _.each(applicationFields, ({ name, noValueError }) => {
    if (!values[name] && noValueError !== '') {
      errors[name] = noValueError;
    } else {
      values[name] === 'none'
    }
  });

  return errors;
}

ApplicationForm = reduxForm({
  validate,
  form: 'applicationForm',
  destroyOnUnmount: false,
})(ApplicationForm);

const selector = formValueSelector('applicationForm')

ApplicationForm = connect(state => {
  let coApplicant = selector(state, 'coApplicant')
  return {
    coApplicant
  }
})(ApplicationForm);

export default ApplicationForm;

