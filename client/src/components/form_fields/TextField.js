import React from 'react';

export default ({input, label, type, meta: {error, touched}}) => {

    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} style={{marginBottom: "5px"}}/>
            <div className="red-text" style={{marginBottom: "20px"}}>{touched && error}</div>
        </div>
    )
}

