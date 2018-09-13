import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
//import Nav from './navbar/Nav'
import Week from './week/Week'
import Tasks from './Task/Tasks'

import Month from './month/Month'

import TaskManager from '../modules/TaskManager'
import WeekManager from '../modules/WeekManager'
import MonthManager from '../modules/MonthManager'
//import "./applicationViews.css"
import Login from './login/Login'

export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    state = {

        month: [],
        week: [],
        tasks: [],

        isLoaded: false,
    }

    componentDidMount() {
        const newState = {}

        TaskManager.getAll()
            .then(tasks => newState.todo = tasks)
        WeekManager.getAll()
            .then(week => newState.week = week)
        MonthManager.getAll()
            .then(month => newState.month = month)
    }
    addTask = tasks => TaskManager.post(tasks)
       .then(() => TaskManager.getAll())
       .then ( tasks => this.setstate({
           tasks: tasks
       }))
       deleteTask = id => TaskManager.delete("tasks", id)
       .then(() => TaskManager.getAllOfId("tasks", this.user().id))
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
                    <Route path="./login/Login" component={Login} />
                    <Route exact path="/" render={(props) => {
                        return <Month months={this.state.month} />
                    }} />

                    <Route exact path="/month" render={props => {
                        if (this.isAuthenticated()) {
                            return <Month {...props}

                                months={this.state.month} />
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
                        }
                    }} />
                    <Route path="/tasks" render={(props) => {
                        return <Tasks {...props}
                            addTask={this.addTask}
                            editTask={this.editTask}
                            deleteTask={this.deleteTask}
                            tasks={this.state.tasks} />
                    }} />


                </React.Fragment>
            </div>
        )
    }
}