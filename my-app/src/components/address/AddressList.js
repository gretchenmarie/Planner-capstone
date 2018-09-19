import React, { Component } from 'react'
import AddressCard from './AddressCard'
import "./Address.css"
import AddressForm from "./AddressForm"


//import EditTask from "./EditTask"
export default class AddressList extends Component {

    render() {
console.log(this.props.address,"list")
        return (
            <React.Fragment>

            <AddressForm {...this.props}/>
            <section>
                    {
                        this.props.address.map((currentAddress,index) =>
                            <AddressCard  key={currentAddress.id} addressCurrent={currentAddress} index={index} editAddress={this.props.editAddress} deleteAddress={this.props.deleteAddress} {...this.props} />
                        )
                    }
                </section>


            </React.Fragment>
        )
    }
}