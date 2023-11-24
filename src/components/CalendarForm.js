import React, { Component } from "react";
class CalendarForm extends Component {
render() {
    return (
        <form>
            <label>First name:
                <input type="text" name='' />
            </label>
            <label>Last name:
                <input type="text" name='' />
            </label>
            <label>Email:
                <input type="email" name='' />
            </label>
            <label>Date:
                <input type="date" name='' />
            </label>
            <label>Time:
                <input type="time" name='' />
            </label>
        </form>
    )
}
}


export default CalendarForm;