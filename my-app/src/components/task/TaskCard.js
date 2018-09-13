import React, { Component } from 'react'
import "./Tasks.css"

import {Link} from "react-router-dom"

export default class TaskCard extends Component {
   render() {
      return (
         <React.Fragment>


            <section className="tasks">


                 <div key={this.props.task.id} className="card">
                              <div className="card-body">
                                 <h5 className="card-title">

                                 {this.props.task.name}
                                 {this.props.task.detail}
                                 {this.props.task.date}
                                 <Link className="nav-link" to={`/tasks/${this.props.task.id}`}>Details</Link>
                                 <button onClick={() => this.props.deleteTask(this.props.task.id)}
                                    className="button">Delete</button>
                                 </h5>
                              </div>
                           </div>


            </section>

         </React.Fragment>
      )
   }
}