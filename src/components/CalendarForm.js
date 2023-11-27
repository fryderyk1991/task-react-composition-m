import React, { Component } from "react";
import FormInput from "./FormInput";

class CalendarForm extends Component {
render() {
    const { inputFields, values, submit, onChange, errors} = this.props;
   
    return (
        <form className="calendar__form" onSubmit={submit} noValidate> 
            {inputFields.map((input) => (
                <FormInput  key={input.id} value={values[input.name]} onChange={onChange} {...input} error={errors[input.name]} />
            ))} 

            <button className="calendar__button--submit" type="submit">Add meeting</button>
        </form>  
    )
}
}


export default CalendarForm;