import React, { Component } from "react"
import "./Address.css"

export default class editAddress extends Component {


    // Set initial state
    state = {
        name: "",
        email: "",
        address: "",
        phone:""

    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }



   editAddress = evt => {
       evt.preventDefault()

       const editAddress = {
           name: this.state.name,
           email: this.state.email,
           address: this.state.address,
           phone: this.state.phone

        }
console.log(editAddress,"edit page");
      
        this.props.editAddress(editAddress, this.props.match.params.editAddressId).then(() => this.props.history.push("/editaddress"))


    };
            componentDidMount () {
                console.log(this.props)
                const editAddress = this.props.address.find(a => a.id === parseInt(this.props.match.params.editAddressId, 0))
                this.setState(editAddress)
            }

    render() {
        return (
            <React.Fragment>
                <form className="editAddressform">

                    <div className="form-group">
                        <label htmlFor="Name"> Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={this.state.name}
                               placeholder=" Name"
                               />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="email"
                               defaultValue={this.state.email}
                               placeholder="email" />
                    </div>
                    < br/>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="address" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="address"
                               defaultValue={this.state.address}
                               placeholder="address" />
                    </div>
                           <br />

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="phone" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone"
                               defaultValue={this.state.phone}
                               placeholder="URL" />
                    </div>

                    <button type="submit"  className="btn" id="submit-edit" onClick={this.editAddress}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}