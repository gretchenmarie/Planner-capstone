
import React, { Component } from "react"
import "./Address.css"
import { Link } from "react-router-dom"






export default class AddressDetail extends Component {
    render() {

        const address = this.props.address.find(a => a.id === parseInt(this.props.match.params.addressId, 0)) || {}

        return (
            <section className="address">
                <div key={address.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {address.name}<br />
                            {address.address}</h4>
                        <h5>{address.email}<br />{address.phone}</h5>
                        <button className="btn">
                            <Link className="nav-link" to={`/address/edit/${address.id}`}>Edit</Link>
                        </button>

                    </div>
                </div>
            </section>
        )
    }
}