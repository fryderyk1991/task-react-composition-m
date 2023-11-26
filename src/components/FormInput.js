import React, { Component } from "react";
import '../css/index.css'
class FormInput extends Component {
render() {
    const { onChange, label, ...input } = this.props;
    return (
        <div className="calendar__form-group form__group">
        <label>{label}</label>
        <input onChange={onChange} {...input} required/>
        <span className="form__error">{input.error}</span>
        </div>
    )
}
}


export default FormInput;