import React, { Component } from "react";
import CalendarItem from "./CalendarItem";
import '../css/calendarList.css'
class CalendarList extends Component {
render() {
    const { meetingList } = this.props;
    const listItem = meetingList.map(item => <CalendarItem key={item.id} fName={item.firstName} lName={item.lastName} email={item.email} date={item.date} time={item.time} />)
    return (
        <ul className="calendar__list">{listItem}</ul>
    )
}
}

export default CalendarList;