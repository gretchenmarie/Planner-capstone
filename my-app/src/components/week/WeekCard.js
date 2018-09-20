import React, { Component } from 'react'
import "./Week.css"

import { Link } from "react-router-dom"

export default class WeekCard extends Component {
    render() {
        return (
            <React.Fragment>

                    <div key={this.props.week.id} className="card">
                        <div className="card-body">
                              <h2> {this.props.week.day}</h2>
                               <h4> {this.props.week.date}</h4>
                            <p className="card-title">
                                <br />
                                {this.props.week.notes}
                                <br />
                                <Link className="nav-link" to={`/tasks`}>View Task List</Link>
                                <Link className="nav-link" to={`/week/${this.props.week.id}`}>See Notes for Today</Link>
                                <button onClick={() => this.props.deleteWeek(this.props.week.id)}
                                    className="button">Delete</button>
                            </p>
                        </div>
                    </div>


            </React.Fragment>
         )}
         }