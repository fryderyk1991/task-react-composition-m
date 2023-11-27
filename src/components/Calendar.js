import React, { Component } from "react";
import { getDataFromAPI, postDataToAPI } from '../calendarProvider';
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
            },
            {
                id: 2,
                label: 'Last name',
                name: 'lastName',
                type: 'text',
            },
            {
                id: 3, 
                label: 'Email',
                name: 'email',
                type: 'email',
            },
            {
                id: 4, 
                label: 'Date',
                name: 'date',
                type: 'date',
            },
            {
                id: 5, 
                label: 'Time',
                name: 'time',
                type: 'time',
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
        this.validation()
      
    }
    validation = () => {
        const { values, errors} = this.state;
          Object.keys(values).forEach(key => {
            if (!values[key]) {
                errors[key] = 'Field is empty!';
            } else delete errors[key];
            if(values['firstName'].length <= 2) {
                errors['firstName'] = 'First name should be longer than 2 letters!'
            } 
             if(values['lastName'].length <= 2) {
                errors['lastName'] = 'Last name should be longer than 2 letters!'
            }
             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (values.email && !emailRegex.test(values.email)) {
            errors.email = 'Email is not valid';
         }
         });
         if (Object.keys(errors).length > 0) {
            this.setState({ errors });
        } else {
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
            console.log(values)
        }
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
    const { meetings, inputs, values, errors } = this.state;
    return (
        <section className="calendar">
            <h1>Calendar</h1>
            <CalendarList meetingList={meetings}/>
            <CalendarForm inputFields={ inputs } values={ values } submit={this.handleSubmit} onChange={this.onChange} errors={errors}/>
        </section>
    )
}
}

export default Calendar;