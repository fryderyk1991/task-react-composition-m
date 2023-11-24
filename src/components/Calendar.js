import React, { Component } from "react";
import { loadData } from '../calendarProvider';
import CalendarList from "./CalendarList";
class Calendar extends Component {
    state = {
        meetings: [],
        //lista spotkań do renderu
        // metody do API
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
        </section>
    )
}
}

export default Calendar;