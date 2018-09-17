import React, { Component } from "react"
import "./Week.css"

export default class EditWeek extends Component {


    // Set initial state
    state = {
        name: "",
        notes: "",

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
   EditWeek = evt => {
       evt.preventDefault()

       const week = {
           name: this.state.name,
           notes: this.state.notes,

        }
console.log(week,"edit page");
        // Create the article and redirect user to article list
        this.props.editWeek(week, this.props.match.params.weekId).then(() => this.props.history.push("/week"))


    };
            componentDidMount () {
                const week = this.props.weeks.find(a => a.id === parseInt(this.props.match.params.weekId, 0))
                this.setState(week)
            }

    render() {
        return (
            <React.Fragment>
                <form className="weekEditForm">

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
                        <label htmlFor="detail">notes</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="notes"
                               defaultValue={this.state.notes}
                               placeholder="details" />
                    </div>
                    < br/>

                    <button type="submit"  className="btn" id="submit-edit" onClick={this.EditWeek}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}
