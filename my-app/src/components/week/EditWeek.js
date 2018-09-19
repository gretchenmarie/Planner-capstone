import React, { Component } from "react"
//import "./Week.css"

export default class EditWeek extends Component {


    // Set initial state
    state = {
        day: "",
        notes: "",

    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    /*
    Local method for validation, creating week object, and
    invoking the function reference passed from parent component
    */
   editWeek = evt => {
       evt.preventDefault()

       const week = {
           day: this.state.day,
           notes: this.state.notes

        }
console.log(week,"edit page");

        this.props.editWeek(week, this.props.match.params.weekId).then(() => this.props.history.push("/week"))


    };
            componentDidMount () {
                const week = this.props.week.find(a => a.id === parseInt(this.props.match.params.weekId, 0))
                this.setState(week)
            }

    render() {
        return (
            <React.Fragment>
                <form className="weekEditForm">

                    <div className="form-group">
                        <label htmlFor="weekName">Day of the week</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="day"
                               defaultValue={this.state.day}
                               placeholder="Day Of the Week"
                               />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">notes</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="notes"
                               defaultValue={this.state.notes}
                               placeholder="notes" />
                    </div>


                    <button type="submit"  className="btn" id="submit-edit" onClick={this.editWeek}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}
