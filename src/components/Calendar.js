import React, { Component } from "react";
import { getDataFromAPI } from '../calendarProvider';
import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
class Calendar extends Component {
    state = {
        meetings: [],
        inputs: [
            {
                id: 1,
                label: 'First name',
                name: 'firstName',
                type: 'text',
                error: 'First name should be more then 2 characters',
                required: true,
            },
            {
                id: 2,
                label: 'Last name',
                name: 'lastName',
                type: 'text',
                error: 'Last name should be more then 2 characters',
                required: true,
            },
            {
                id: 3, 
                label: 'Email',
                name: 'email',
                type: 'email',
                error: 'Email is not valid',
                required: true,
            },
            {
                id: 4, 
                label: 'Date',
                name: 'date',
                type: 'date',
                error: 'field is empty!',
                required: true,
            },
            {
                id: 5, 
                label: 'Time',
                name: 'time',
                type: 'time',
                error: 'field is empty!',
                required: true,
            },

        ],
        values: {
            firstName: '',
            lastName: '',
            email: '',
            date:'',
            time: '',
        }
    }
    componentDidMount() {
        getDataFromAPI()
        .then(data => {
            this.setState({ meetings: data });
        })
        .catch(err => console.log(err))
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    onChange = e => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [name]: value,
            },
        }));
    }
render() {
    const { meetings, inputs, values } = this.state;
    return (
        <section className="calendar">
            <h1>Calendar</h1>
            <CalendarList meetingList={meetings}/>
            <CalendarForm inputFields={ inputs } values={ values } submit={this.handleSubmit} onChange={this.onChange}/>
        </section>
    )
}
}

export default Calendar;