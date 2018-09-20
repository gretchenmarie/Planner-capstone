import React, { Component } from "react"
import "./Week.css"
import { Link } from "react-router-dom"

import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class WeekDetail extends React.Component {
  render() {
    const week = this.props.week.find(w => w.id === parseInt(this.props.match.params.weekId, 0)) || {}
    return (
      <Form key={week.id}>
        <FormGroup>
          <Label for="day">{week.day}</Label>
        </FormGroup>
        <FormGroup>
          <Label for="notes">Notes</Label>
          <FormText color="bold">
            {week.notes}
          </FormText>
        </FormGroup>
        <button>
          <Link className="nav-link" to={`/address`}>View Address Book</Link></button>
        <button className="btn">
          <Link className="nav-link" to={`/week/edit/${week.id}`}>Edit</Link>
        </button>
      </Form>
    );
  }
}