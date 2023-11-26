import React, { Component } from "react";
import FormInput from "./FormInput";

class CalendarForm extends Component {
render() {
    const { inputFields, values, submit, onChange } = this.props;
   
    return (
        <form className="calendar__form" onSubmit={submit}> 
            {inputFields.map((input) => (
                <FormInput  key={input.id} value={values[input.name]} onChange={onChange} {...input} />
            ))} 

            <button type="submit">Add meeting</button>
        </form>  
    )
}
}


export default CalendarForm;