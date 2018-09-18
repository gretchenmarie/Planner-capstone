import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Week.css"
import { Link } from "react-router-dom"

class WeekForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      day: "",
      date:"",
      notes: "",

      userId: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  user = () => JSON.parse(sessionStorage.getItem("credentials"))

  /*
      Local method for validation, creating task object, and
      invoking the function reference passed from parent component
   */
  constructNewWeek = evt => {
    evt.preventDefault()
    const newDate = {
      day: this.state.day,
      notes: this.state.notes,
      status: false,
      userId: this.user().id,

    }
    this.props.addWeek(newDate).then(() => this.toggle())
  }

  render() {
    return (
      <div className="weekform">
        <Button color="indigo" onClick={this.toggle}>Create Your Day</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Today</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="DayName">Day Of The Week</Label>
                <Input type="text" name="Day" id="day" placeholder="Day of the Week" onChange={this.handleFieldChange} />
              </FormGroup>
              <FormGroup>
                <Label for="Date">Todays Date</Label>
                <Input type="date" name="Date" id="date" placeholder="Date" onChange={this.handleFieldChange} />
              </FormGroup>
              <FormGroup>
                <Label for="DayNotes">notes</Label>
                <Input type="text" name="notes" id="notes" placeholder="notes" onChange={this.handleFieldChange} />
              </FormGroup>

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.constructNewWeek}>Save Day</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WeekForm;