import React, { Component } from "react"
import "./Tasks.css"

export default class EditTask extends Component {


    // Set initial state
    state = {
        name: "",
        detail: "",
        date: ""
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
   EditTask = evt => {
       evt.preventDefault()

       const task = {
           name: this.state.name,
           detail: this.state.detail,
           date: this.state.date
        }

        // Create the article and redirect user to article list
        this.props.task(this.props.match.params.taskId, task).then(() => this.props.history.push("/"))


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
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={this.state.name}
                               placeholder="Task Name"
                               />
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="detail"
                               defaultValue={this.state.details}
                               placeholder="details" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="date"
                               defaultValue={this.state.date}
                               placeholder="URL" />
                    </div>


                    <button type="submit"  className="btn" id="submit-edit" onClick={this.editTask}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}