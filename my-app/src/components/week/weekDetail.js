import React, { Component } from "react"
import "./Week.css"
import { Link } from "react-router-dom"






export default class WeekDetail extends Component {
    render() {

        const week = this.props.week.find(w => w.id === parseInt(this.props.match.params.weekId, 0)) || {}

        return (
            <section className="week">

                <div key={week.id} className="card">
                    <div className="card-body">

                        <h2 className="card-title">
                            {week.day}
                        </h2>
                        <p className="card-title">
                            {week.notes}
                        </p>
                        <button className="btn">
                            <Link className="nav-link" to={`/week/edit/${week.id}`}>Edit</Link>
                        </button>

                    </div>
                </div>
            </section>
        )
    }
}