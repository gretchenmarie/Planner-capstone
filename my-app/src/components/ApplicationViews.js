import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
//import Nav from './navbar/Nav'
import Week from './week/Week'
import TaskList from './task/TaskList'
import TaskDetail from "./task/TaskDetail"
import EditTask from "./task/EditTask"
import Month from './month/Month'

import TaskManager from '../modules/TaskManager'
import WeekManager from '../modules/WeekManager'
import MonthManager from '../modules/MonthManager'
//import "./applicationViews.css"
import Login from './login/Login'

export default class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    user = () => JSON.parse(sessionStorage.getItem("credentials"))
    state = {

        month: [],
        week: [],
        tasks: [],

        isLoaded: false,
    }

    componentDidMount() {
        const newState = {}

        TaskManager.getAll().then(tasks => newState.tasks = tasks)
            .then(() => WeekManager.getAll().then(week => newState.week = week))

            .then(() => MonthManager.getAll().then(month => newState.month = month))

            .then(() => {this.setState(newState) })

    }
    addTask = tasks => TaskManager.post(tasks)
        .then(() => TaskManager.getAll())
        .then(tasks => this.setState({
            tasks: tasks
        }))
    deleteTask = id => TaskManager.delete( id)
        .then(() => TaskManager.getAll())
        .then(tasks => this.setState({
            tasks: tasks
        }))
    editTask = (id, editedTask) => TaskManager.patch("tasks", id, editedTask)
        .then(() => TaskManager.getAllOfId("tasks", this.user().id))
        .then(tasks => this.setState({
            tasks: tasks
        }))



    render() {
        return (
            <div className="stylenavbar">

                <React.Fragment>
                <Route path="/login" component={Login} />

                <Route exact path="/" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <Month {...props}

                                month={this.state.month} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/week" render={props => {
                        if (this.isAuthenticated()) {
                            return <Week {...props}
                                editWeek={this.editWeek}
                                week={this.state.week}
                                tasks={this.state.Tasks} />
                        }else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/tasks" render={(props) => {
                       if (this.isAuthenticated()) {
                        return <TaskList {...props}
                            addTask={this.addTask}
                            editTask={this.editTask}
                            deleteTask={this.deleteTask}
                            tasks={this.state.tasks} />
                        }else {
                            return <Redirect to="/login" />
                        }
                    }} />
                   <Route exact path="/tasks/:taskId(\d+)" render={(props) => {
                        return <TaskDetail {...props}
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask} />
                    }} />
                   <Route path="/tasks/edit/:taskId(\d+)" render={(props) => {
                        return <EditTask {...props}
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask} />
                    }} />


                </React.Fragment>
            </div>
        )
    }
}