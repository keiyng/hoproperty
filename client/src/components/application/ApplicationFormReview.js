import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {applicationFields} from '../form_fields/formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ApplicationFormReview = ({ onCancel, formValues, submitApplication, history, submitting }) => {
  const reviewFields = _.map(applicationFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitApplication(formValues, history)}
        disabled={submitting}
        className="green white-text btn-flat right"
      >
        Send Application
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.applicationForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(ApplicationFormReview));
