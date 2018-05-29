import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { applicationFields } from '../form_fields/formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ApplicationFormReview = ({
  onCancel,
  formValues,
  message,
  submitApplication,
  history
}) => {
  const reviewFields = _.map(applicationFields, ({ name, label }) => {
    return (
      <div key={name} className="fieldsReview">
        <label>{label}</label>
        <span>{formValues[name] ? formValues[name] : 'none'}</span>
      </div>
    );
  });

  return (
    <div className="pageContainer">
      <h3>Please confirm your entries:</h3>
      <div className="applicationFormContainer">{reviewFields}</div>
      {message.error && (
        <div className="errorMessage">
          {message.error}
        </div>
      )}
      {message.success && (
        <div className="successMessage">
          {message.success}
        </div>
      )}
      <div className="actionContainer">
        <button className="backward" onClick={onCancel}>
          Back
        </button>
        <button
          onClick={() => {
            document.getElementById('submitApplicationButton').disabled = true;
            submitApplication(formValues, history);
          }}
          className="forward"
          id="submitApplicationButton"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.applicationForm.values,
    message: state.message
  };
}

export default connect(mapStateToProps, actions)(
  withRouter(ApplicationFormReview)
);
