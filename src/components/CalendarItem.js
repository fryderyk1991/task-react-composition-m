import React, {Component} from "react";

class CalendarItem extends Component {
    render() {
        const { fName, lName, email, date, time} = this.props;
        return (
            <li className="calendar__list-item">{fName} {lName}, {email}, {date}, {time}</li>
        )
    }
}

export default CalendarItem;


