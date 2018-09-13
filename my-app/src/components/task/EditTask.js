import React, { Component } from 'react'
import "./Tasks.css"

export default class EditTask extends Component {

    state = {
        edit: false,
        task: null
    }

    // Update state whenever an input field is edited
    handleFieldChange = (taco, evt) => {
        const editedTask = this.props.task;
        const stateToChange = taco
        editedTask[stateToChange] = evt.target.value
        this.setState({ editedTask })
    }

    user = () => {
        if (localStorage.getItem("credentials") !== null) {
            return JSON.parse(localStorage.getItem("credentials"))
        }
        else {return JSON.parse(sessionStorage.getItem("credentials"))}
    }

    // changes state for edit to true
    editMode = () => {
        this.setState({ edit: true, task: this.props.task })
    }

    constructEditedTask = evt => {
        evt.preventDefault()
        const task = {
            name: this.state.task.name,
            date: this.state.task.date,
            details: this.state.task.details,
            userId: this.state.task.userId,
            id: this.state.task.id,
            status: this.state.task.status
        }

        // Create the animal and redirect user to animal list
        this.props.editTask(this.state.task.id, task);
        this.setState({ edit: false });
    }

    render() {

        return (
            <React.Fragment >
                {(this.state.edit) ?
                    <div className="edittask">
                        <label>Task Name</label>
                        <input type="text" required="true"
                        className="form-control"
                        onChange={(evt) => { this.handleFieldChange("name", evt) }}
                        id="name"
                        value={this.state.task.name} />
                        <label>Task Details</label>
                        <input type="text" required="true"
                        className="form-control"
                        onChange={(evt) => { this.handleFieldChange("details", evt) }}
                        id="details"
                        value={this.state.task.details} />
                        <label>Task Date</label>
                        <input type="date" required="true"
                        className="form-control"
                        onChange={(evt) => { this.handleFieldChange("date", evt) }}
                        id="date"
                        value={this.state.tasks.date} />
                        <button onClick={this.constructEditedTask}>Save Edited Task</button>
                    </div>
                :
                    <div className="edittask">
                        <h5>{this.props.tasks.name}</h5>
                        <h5>{this.props.tasks.details}</h5>
                        <h5>{this.props.tasks.date}</h5>
                        <label>Task Complete</label>
                        <input type="checkbox" name="completed" value="complete"/>
                        <button onClick={() => this.props.deleteTask(this.props.tasks.id)}>Delete Task</button>
                        <button onClick={this.editMode}>Edit Task</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}