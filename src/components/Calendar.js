import React, { Component } from "react";
import { loadData } from '../calendarProvider';
import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import '../css/calendar.css'
class Calendar extends Component {
    state = {
        meetings: [],
    }
    componentDidMount() {
        loadData()
        .then(data => {
            this.setState({ meetings: data });
        })
        .catch(err => console.log(err))
    }
render() {
    const { meetings } = this.state;
    return (
        <section className="calendar">
            <h1>Calendar</h1>
            <CalendarList meetingList={meetings}/>
            <CalendarForm />
        </section>
    )
}
}

export default Calendar;