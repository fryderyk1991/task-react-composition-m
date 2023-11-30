import React, { Component } from "react";
import '../css/calendarForm.css'
class FormInput extends Component {
render() {
    const { onChange, label, error, autoComplete, onClick, ...input } = this.props;
    return (
        <div className="calendar__form-group form__group">
        <label className="form__label">{label}</label>
        <input className="form__input" onChange={onChange} {...input} autoComplete={autoComplete} onClick={(e) => onClick(e)}/>
          {autoComplete && autoComplete.length > 0 && (
             <div className="form__result">
             {autoComplete.map((item, index) => (
            <p className="form__result-item"  key={index}>{item}</p>
        ))}
        </div>
          )}
        <span className="form__error">{error}</span>
        </div>
    )
}
}


export default FormInput;