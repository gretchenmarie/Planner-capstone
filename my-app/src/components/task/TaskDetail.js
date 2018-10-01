import React, { Component } from "react"
import "./Tasks.css"
import {Link} from "react-router-dom"






export default class TaskDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const task = this.props.tasks.find(a => a.id === parseInt(this.props.match.params.taskId,0)) || {}

        return (
            <section className="task">

                <div key={task.id} className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            {task.detail}</h3>
                        <h5>{task.date}<br /> {task.time} </h5>
                        <button className="btn">
                        <Link className="nav-link" to={`/tasks/edit/${task.id}`}>Edit</Link>
                          </button>

                    </div>
                </div>
            </section>
        )
    }
}