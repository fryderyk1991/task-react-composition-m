import React, {Component} from "react";

class CalendarItem extends Component {
    render() {
        const { fName, lName, email, date, time} = this.props;
        return (
            <li>{fName} {lName}, {email}, {date}, {time}</li>
        )
    }
}

export default CalendarItem;


