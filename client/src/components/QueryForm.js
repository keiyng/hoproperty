import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validateEmails from '../utils/validateEmail';
import { queryFields } from './form_fields/formFields';
import TextField from './form_fields/TextField';
import TextareaField from './form_fields/TextareaField';
import * as actions from '../actions';


let QueryForm = ({formValues, submitQuery, message, history, touched, invalid}) => {

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

    <div style={{textAlign: 'center', paddingTop: '15px', height: '900px'}}>
      <h3>Contact Us</h3>
      <p style={{fontSize: 'smaller'}}>P.O. Box 28, Cedar Grove, NJ 07009 <br />Monday - Friday 9:00am to 5:00pm</p>
      <div>
        <form>{renderFields}</form>
        <button onClick={() => {
          document.getElementById('submitQueryButton').disabled = true; 
          submitQuery(formValues, history);
          }} 
          className="btn btn-info"
          id="submitQueryButton"
          disabled={!touched || invalid}
          >Send</button>
        {message.error && <div style={{color: 'red', marginBottom: '10px'}}>{message.error}</div>}
        {message.success && <div style={{color: '#000', marginBottom: '10px', fontWeight: 'bold'}}>{message.success}</div>}
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
  // console.log(state)
  return {
    invalid: state.form.queryForm.invalid,
    touched: state.form.queryForm.anyTouched,
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


// class QueryForm extends Component {
//   renderFields() {
//     return _.map(queryFields, ({label, name, type}) => {
//       if (type === 'textarea') {
//         return (
//           <Field
//             key={name}
//             component={TextareaField}
//             type={type}
//             label={label}
//             name={name}
//           />
//         );
//       } else {
//         return (
//           <Field
//             key={name}
//             component={TextField}
//             type={type}
//             label={label}
//             name={name}
//           />
//         );
//       }
//     })
//   }
//   render() {
//     const {message, formValues, history} = this.props
//     return (
//       <div style={{textAlign: 'center', paddingTop: '15px', height: '900px'}}>
//       <h3>Contact Us</h3>
//       <p style={{fontSize: 'smaller'}}>P.O. Box 28, Cedar Grove, NJ 07009 <br />Monday - Friday 9:00am to 5:00pm</p>
//       <div>
//         <form>{this.renderFields()}</form>
//         <button onClick={() => {
//           document.getElementById('submitQueryButton').disabled = true; 
//           this.submitQuery(formValues, history);
//           }} 
//           className="btn btn-info"
//           id="submitQueryButton"
//           >Send</button>
//         {message.error && <div style={{color: 'red', marginBottom: '10px'}}>{message.error}</div>}
//         {message.success && <div style={{color: '#000', marginBottom: '10px', fontWeight: 'bold'}}>{message.success}</div>}
//       </div>
//     </div>
//     )
//   }
// }

// function validate(values) {
//   const errors = {};

//   errors.email = validateEmails(values.email || '');

//   _.each(queryFields, ({ name, noValueError }) => {
//     if (!values[name]) {
//       errors[name] = noValueError;
//     }
//   });

//   return errors;
// }

// QueryForm = reduxForm({
//   validate,
//   form: 'queryForm',
// })(QueryForm);

// function mapStateToProps(state) {
//   console.log(state.form.queryForm)
//   return {
//     // formValues: state.form.queryForm.values,
//     // message: state.message
//   };
// }

// export default connect(mapStateToProps, actions)(QueryForm);
