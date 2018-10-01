import React, { Component } from "react"
import "./Tasks.css"

export default class EditTask extends Component {


    // Set initial state
    state = {
        name: "",
        detail: "",
        date: "",
        day:"",
        time:""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    /*
    Local method for validation, creating animal object, and
    invoking the function reference passed from parent component
    */
   editTask = evt => {
       evt.preventDefault()

       const task = {
           name: this.state.name,
           detail: this.state.detail,
           date: this.state.date,
           day: this.state.day,
           time: this.state.time
        }
console.log(task,"edit page");
        // Create the article and redirect user to article list
        this.props.editTask(task, this.props.match.params.taskId).then(() => this.props.history.push("/tasks"))


    };
            componentDidMount () {
                const task = this.props.tasks.find(a => a.id === parseInt(this.props.match.params.taskId, 0))
                this.setState(task)
            }

    render() {
        return (
            <React.Fragment>
                <form className="taskform">

                    <div className="form-group">
                        <label htmlFor="taskName">Task Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={this.state.name}
                               placeholder="Task Name"
                               />
                    </div>
                    <div className="form-group">
                        <label htmlFor="detail">Details</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="detail"
                               defaultValue={this.state.detail}
                               placeholder="details" />
                    </div>
                    < br/>
                    <div className="form-group">
                        <label htmlFor="day">Day</label>
                        <input type="day" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="day"
                               defaultValue={this.state.day}
                               placeholder="URL" />
                    </div>
                           <br />

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="date"
                               defaultValue={this.state.date}
                               placeholder="URL" />
                    </div>
                             <br />



                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input type="time" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="time"
                               defaultValue={this.state.time}
                               placeholder="URL" />
                    </div>


                    <button type="submit"  className="btn" id="submit-edit" onClick={this.editTask}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}

