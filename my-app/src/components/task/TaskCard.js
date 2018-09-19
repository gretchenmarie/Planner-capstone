import React, { Component } from 'react'
import "./Tasks.css"
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from "react-router-dom"

export default class TaskCard extends Component {
    render() {
        let mystyle = ""
        if (this.props.index === 0) {
            mystyle = "mostrecent"
        }

        return (
            <ListGroup  >
        <ListGroupItem active key={this.props.task.id} className="card" className={`card-body ${mystyle}`} >
          <ListGroupItemHeading> {this.props.task.name}, {this.props.task.date}</ListGroupItemHeading>
          <ListGroupItemText>
          {this.props.task.detail}
          <Link className="nav-link" to={`/tasks/${this.props.task.id}`}>Details</Link>
          {this.props.task.date} <button onClick={() => this.props.deleteTask(this.props.task.id)}
                                    className="button">Delete</button>
          </ListGroupItemText>
        </ListGroupItem>
        </ListGroup>




        )
    }
}