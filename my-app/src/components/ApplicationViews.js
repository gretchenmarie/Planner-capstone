import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
//import Nav from './navbar/Nav'
import WeekDetail from './week/WeekDetail'
import WeekList from './week/WeekList'
import EditWeek from './week/EditWeek'
import AddressDetail from './address/AddressDetail'
import AddressList from './address/AddressList'
import EditAddress from './address/EditAddress'
import TaskList from './task/TaskList'
import TaskDetail from "./task/TaskDetail"
import EditTask from "./task/EditTask"
import Month from './month/Month'

import AddressManager from '../modules/AddressManager'
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
        address:[],

        isLoaded: false,
    }

    componentDidMount() {
        const newState = {}

        TaskManager.getAll(this.user().id).then(tasks => newState.tasks = tasks)
            .then(() => WeekManager.getAll().then(week => newState.week = week))

            .then(() => MonthManager.getAll().then(month => newState.month = month))
            .then(() => AddressManager.getAll().then(address => newState.address = address))

            .then(() => { this.setState(newState) })

    }
    addTask = tasks => TaskManager.post(tasks)
        .then(() => TaskManager.getAll(this.user().id))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    deleteTask = id => TaskManager.delete(id)
        .then(() => TaskManager.getAll(this.user().id))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    editTask = (editedTask, id) => TaskManager.edit(editedTask, id)
        .then(() => TaskManager.getAll("tasks", this.user().id))
        .then(tasks => this.setState({
            tasks: tasks
        }))
    addWeek = week => WeekManager.post(week)
        .then(() => WeekManager.getAll(this.user().id))
        .then(week => this.setState({
            week: week
        }))
    deleteWeek = id => WeekManager.delete(id)
        .then(() => WeekManager.getAll(this.user().id))
        .then(week => this.setState({
            week: week
        }))
    editWeek = (editedWeek, id) => WeekManager.edit(editedWeek, id)
        .then(() => WeekManager.getAll("weeks", this.user().id))
        .then(week => this.setState({
            week: week
        }))
    addAddress = address => AddressManager.post(address)
        .then(() => AddressManager.getAll(this.user().id))
        .then(address => this.setState({
            address: address
        }))
    deleteAddress = id => AddressManager.delete(id)
        .then(() => AddressManager.getAll(this.user().id))
        .then(address => this.setState({
            address: address
        }))
    editAddress = (editAddress, id) => AddressManager.edit(editAddress, id)
        .then(() => AddressManager.getAll("Address", this.user().id))
        .then(address => this.setState({
            address: address
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

                    <Route exact path="/month" render={props => {
                        if (this.isAuthenticated()) {
                            return <Month {...props}

                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/week" render={props => {
                        if (this.isAuthenticated()) {
                            return <WeekList {...props}
                                addWeek={this.addWeek}
                                deleteWeek={this.deleteWeek}
                                editWeek={this.editWeek}
                                week={this.state.week}
                            />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/week/edit/:weekId(\d+)" render={(props) => {
                        return <EditWeek {...props}
                            week={this.state.week}
                            deleteWeek={this.deleteWeek}
                            editWeek={this.editWeek} />
                    }} />
                    <Route exact path="/week/:weekId(\d+)" render={(props) => {
                        return <WeekDetail {...props}
                            week={this.state.week}
                            deleteWeek={this.deleteWeek}
                            editWeek={this.editWeek} />
                    }} />
                    <Route exact path="/tasks" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <TaskList {...props}
                                addTask={this.addTask}
                                editTask={this.editTask}
                                deleteTask={this.deleteTask}
                                tasks={this.state.tasks} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/tasks/:taskId(\d+)" render={(props) => {
                        return <TaskDetail {...props}
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask} />
                    }} />
                    <Route exact path="/tasks/edit/:taskId(\d+)" render={(props) => {
                        return <EditTask {...props}
                            tasks={this.state.tasks}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask} />
                    }} />
                    <Route exact path="/address" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <AddressList {...props}
                                addAddress={this.addAddress}
                                editAddress={this.editAddress}
                                deleteAddress={this.deleteAddress}
                                address={this.state.address} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route exact path="/address/:addressId(\d+)" render={(props) => {
                        return <AddressDetail {...props}
                            address={this.state.address}
                            deleteAddress={this.deleteAddress}
                            editAddress={this.editAddress} />
                    }} />
                    <Route exact path="/address/edit/:addressId(\d+)" render={(props) => {
                        return <EditAddress {...props}
                            address={this.state.address}
                            deleteAddress={this.deleteAddress}
                            editAddress={this.editAddress} />
                    }} />


                </React.Fragment>
            </div>
        )
    }
}