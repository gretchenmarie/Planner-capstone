import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Address.css"

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      address: "",
      phone:"",

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
    constructNewTask = evt => {
        evt.preventDefault()

        const newAddress = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
            userId: this.user().id,

        }
        this.props.addAddress(newAddress).then(() => this.toggle())
    }

  render() {
    return (
      <div className="taskform" >
        <Button color="indigo" onClick={this.toggle}>Add Address</Button>
        <Modal  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Contact</ModalHeader>
          <ModalBody>
              <Form>
                  <FormGroup>
                    <Label for="contact Name">Contact Name</Label>
                    <Input type="text" name="name" id="name" placeholder="contact Name" onChange={this.handleFieldChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">email</Label>
                    <Input type="text" name="email" id="email" placeholder="email" onChange={this.handleFieldChange}/>
                  </FormGroup>
                  <FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input type="address" name="address" id="address" onChange={this.handleFieldChange}/>
                  </FormGroup>
                    <Label for="phone">Phone</Label>
                  <Input type="phone" name="phone" id="phone" onChange={this.handleFieldChange}/>
                  </FormGroup>

              </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.constructNewTask}>Save New Contact</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddressForm;