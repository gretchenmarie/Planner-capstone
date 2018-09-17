import React, { Component } from "react"
import "./Week.css"
import {Link} from "react-router-dom"






export default class WeekDetail extends Component {
    render() {
        
        const week = this.props.weeks.find(a => a.id === parseInt(this.props.match.params.weekId,0)) || {}

        return (
            <section className="week">

                <div key={week.id} className="card">
                    <div className="card-body">
                        <h3 className="card-title">

                            {week.name}
                            <br/>
                            {week.notes}
                            <br />

                        </h3>

                        <h4 className="card-title">{week.name}</h4>
                        <button className="btn">
                        <Link className="nav-link" to={`/week/edit/${week.id}`}>Edit</Link>
                          </button>

                    </div>
                </div>
            </section>
        )
    }
}