import React, { Component } from "react";
import '../css/index.css'
class FormInput extends Component {
render() {
    const { onChange, label, error, ...input } = this.props;
    return (
        <div className="calendar__form-group form__group">
        <label className="form__label">{label}</label>
        <input className="form__input" onChange={onChange} {...input}/>
        <span className="form__error">{error}</span>
        </div>
    )
}
}


export default FormInput;