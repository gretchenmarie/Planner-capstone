import React, {Component} from 'react';
import { Card,  CardTitle, CardText } from 'reactstrap';
//import "/Address.css"
import { Link } from "react-router-dom"

export default class AddressCard extends Component{
    render(){
      console.log(this.props.addressCurrent)
  return (

    <div key={this.props.addressCurrent.id}>
      <Card body outline color="danger" >
        <CardTitle>{this.props.addressCurrent.name}</CardTitle>
        <CardText>{this.props.addressCurrent.email}</CardText>
        <CardText>{this.props.addressCurrent.address}</CardText>
        <CardText>{this.props.addressCurrent.phone}</CardText>
        <Link className="nav-link" to={`/address/${this.props.addressCurrent.id}`}>Details</Link>
         <button onClick={() => this.props.deleteAddress(this.props.addressCurrent.id)}
                                    className="button">Delete</button>
      </Card>

    </div>
  )
}
}

