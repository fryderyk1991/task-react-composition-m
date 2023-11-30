import React, { Component } from "react";
import FormInput from "./FormInput";
import '../css/calendarForm.css'
class CalendarForm extends Component {
render() {
    const { inputFields, values, submit, onChange, errors, autoComplete, onClick} = this.props;
   
    return (
        <form className="calendar__form" onSubmit={submit} noValidate> 
            {inputFields.map((input) => (
                <FormInput  key={input.id} value={values[input.name]} onChange={onChange} onClick={onClick} {...input} error={errors[input.name]} autoComplete={autoComplete} />
            ))} 

            <button className="calendar__button--submit" type="submit">Add meeting</button>
        </form>  
    )
}
}


export default CalendarForm;