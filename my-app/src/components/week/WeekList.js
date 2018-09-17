import React, { Component } from 'react'
import WeekCard from './WeekCard'
//import "./Week.css"
import WeekForm from "./WeekForm"


//import EditTask from "./EditTask"
export default class WeekList extends Component {

    render() {

        return (
            <React.Fragment>

            <WeekForm {...this.props}/>
            <section>
                    {
                        this.props.weeks.map(week =>
                            <WeekCard  key={week.id} task={week}  editWeek={this.props.editWeek} deleteWeek={this.props.deleteWeek} {...this.props} />
                        )
                    }
                </section>


            </React.Fragment>
        )
    }
}