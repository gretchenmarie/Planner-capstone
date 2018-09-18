import React, { Component } from 'react'
import "./Week.css"

import {Link} from "react-router-dom"

export default class WeekCard extends Component {
   render() {
      return (
         <React.Fragment>


            <section className="weeks">


                 <div key={this.props.week.id} className="card">
                              <div className="card-body">
                                 <h5 className="card-title">

                                 {this.props.week.day}
                                 <br />
                                 {this.props.week.date}
                                 <br />
                                 {this.props.week.notes}
                                 <br />
                                 <Link className="nav-link" to={`/tasks`}>View Task List</Link>
                                 <Link className="nav-link" to={`/week/${this.props.week.id}`}>See Notes for Today</Link>
                                 <button onClick={() => this.props.deleteWeek(this.props.week.id)}
                                    className="button">Delete</button>
                                 </h5>
                              </div>
                           </div>

            </section>

</React.Fragment>
)
}
}