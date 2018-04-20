import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
    return (
        <div>
            <label>{label}</label>
            <div>
              <textarea {...input} rows="5" cols="50"></textarea>
              </div>
            <div className="error" style={{marginBottom: "20px"}}>{touched && error}</div>
        </div>
    )
}


