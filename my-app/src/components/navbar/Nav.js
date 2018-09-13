import React, { Component } from "react"
//import { Link } from "react-router-dom"
//import "bootstrap/dist/css/bootstrap.min.css"

import { Link } from "react-router-dom"



class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">month</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/week">Week Of</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Task</Link>
                    </li>


                </ul>
            </nav>
        )
    }
}

export default Nav