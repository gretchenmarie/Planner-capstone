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
                                 <br />
                                 {this.props.task.detail}
                                 <br />
                                 {this.props.task.day}
                                 <br />
                                 
                                 {this.props.task.date}
                                 <br />
                                 {this.props.task.time}
                                 <br />
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