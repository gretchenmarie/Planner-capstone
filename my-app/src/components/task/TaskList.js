import React, { Component } from 'react'
import TaskCard from './TaskCard'
import "./Tasks.css"
import TaskForm from "./TaskForm"

//import EditTask from "./EditTask"
export default class TaskList extends Component {

    render() {

        return (
            <React.Fragment>

            <TaskForm {...this.props}/>
            <section>
                    {
                        this.props.tasks.map(task =>
                            <TaskCard key={task.id} task={task} {...this.props} />
                        )
                    }
                </section>

            </React.Fragment>
        )
    }
}