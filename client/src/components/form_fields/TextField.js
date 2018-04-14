import React from 'react';

export default ({input, label, type, meta: {error, touched}}) => {

    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} style={{marginBottom: "5px"}}/>
            <div className="error" style={{marginBottom: "15px"}}>{touched && error}</div>
        </div>
    )
}

