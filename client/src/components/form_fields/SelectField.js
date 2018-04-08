import React from 'react';
import { Field } from 'redux-form';
import _ from 'lodash';

export default ({ input: { name }, label, options, meta: {touched, error}}) => {

  const renderOptions = () => {
    return _.map(options, item => {
      return <option key={item} value={item}>{item}</option>;
    });
  };
  return (
    <div>
      <label>{label}</label>
      <div className="red-text" style={{marginBottom: "20px"}}>{touched && error}</div>
      <Field
        key={name}
        type="select"
        label={label}
        name={name}
        component="select"
      >
        <option value="">Please Select</option>
        {renderOptions()}
      </Field>
    </div>
  );
};
