import React, { Component } from "react";
import { getDataFromAPI, postDataToAPI} from '../calendarProvider';
import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import {validation } from '../validationForm'
import '../css/calendar.css'
class Calendar extends Component {
    state = {
        meetings: [],
        inputs: [
            {
                id: 1,
                label: 'First name',
                name: 'firstName',
                type: 'text',
                required: true
            },
            {
                id: 2,
                label: 'Last name',
                name: 'lastName',
                type: 'text',
                required: true
            },
            {
                id: 3, 
                label: 'Email',
                name: 'email',
                type: 'email',
                pattern: '/^[^\s@]+@[^\s@]+\.[^\s@]+$/',
                required: true
            },
            {
                id: 4, 
                label: 'Date',
                name: 'date',
                type: 'date',
                required: true
            },
            {
                id: 5, 
                label: 'Time',
                name: 'time',
                type: 'time',
                required: true
            },
        ],
        values: {
            firstName: '',
            lastName: '',
            email: '',
            date:'',
            time: '',
        },
        errors: {},
        autoComplete: [],
    }
    componentDidMount() {
        getDataFromAPI()
        .then(data => {
            this.setState({ meetings: data });
        })
        .catch(err => console.log(err))
    }
    handleSubmit = e => {
        const { errors, values} = this.state
        e.preventDefault();
        validation(values, errors)
        if(validation) {
          this.showErrors()
        }
    }

    showErrors = () => {
        const { errors } = this.state; 
        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
        }
        else {
            this.addMeeting()
        }
    }
    addMeeting = () => {
        const {  values } = this.state; 
            this.setState({ errors: {} });
            postDataToAPI(values)
            .then(() => {
                getDataFromAPI()
                    .then(data => {
                        this.setState({ meetings: data });
                    })
                    .catch(err => console.log(err));
            })
            Object.keys(values).forEach(key => {
                values[key] = "";
            })
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            values: {
                ...prevState.values,
                [name]: value,
            },
        }));
        this.showInputAutoComplete(value)
    }

    onClick = e => {
      
    }
    
    showInputAutoComplete = (value) => {
        if(value.length > 0) {
            const path =  `?firstName_like=${value}`;
            getDataFromAPI(`${path}`)
            .then(data => {
              this.setState({ autoComplete: [...data]})
            })
            .catch(err => console.log(err));
        } else {
            this.setState({ autoComplete: []})
        } 
    }
        
render() {
    const { meetings, inputs, values, errors, autoComplete } = this.state;
    return (
        <section className="calendar">
            <h1 className="calendar__heading">Calendar</h1>
            <CalendarList meetingList={meetings}/>
            <CalendarForm inputFields={ inputs } values={ values } submit={this.handleSubmit} onChange={this.onChange} onClick={this.onClick} errors={errors} autoComplete={autoComplete} />
        </section>
    )
}
}

export default Calendar;