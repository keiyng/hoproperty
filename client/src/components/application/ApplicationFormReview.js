import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import {applicationFields} from '../form_fields/formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const ApplicationFormReview = ({ onCancel, formValues, submitApplication, history, submitting }) => {
  const reviewFields = _.map(applicationFields, ({ name, label }) => {
    return (
      <div key={name} style={{marginBottom: '10px'}}>
        <label><u><strong>{label}</strong></u></label>
        <div>{formValues[name] ? formValues[name] : 'none' }</div>
      </div>
    );
  });

  return (
    <div style={{marginTop: '10px'}}>
      <h5 style={{marginBottom: '10px', textAlign: 'left'}}><em>Please confirm your entries: </em></h5>
      <div style={{backgroundColor: '#fafafa', opacity: '0.85', paddingTop: '10px'}}>
      {reviewFields}
      </div>
      <div style={{paddingBottom: '25px'}}>
      <button
        className='btn btn-secondary' style={{marginRight: '20px'}}
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitApplication(formValues, history)}
        disabled={submitting}
        className="btn btn-info"
      >
        Submit Application
        <span className="oi oi-envelope-closed" style={{marginLeft: '5px'}}></span>
      </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.applicationForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(ApplicationFormReview));
