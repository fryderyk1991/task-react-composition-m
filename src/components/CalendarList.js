import React, { Component } from "react";
import CalendarItem from "./CalendarItem";
class CalendarList extends Component {
render() {
    const { meetingList } = this.props;

    const listItem = meetingList.map(item => <CalendarItem fName={item.firstName} lName={item.lastName} email={item.email} date={item.date} time={item.time}/>)

    return (
        <ul className="calendar__list">{listItem}</ul>
    )
}
}

export default CalendarList;