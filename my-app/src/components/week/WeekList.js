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
                        this.props.week.map(day =>
                            <WeekCard  key={day.id} week={day} addWeek={this.props.addWeek} editWeek={this.props.editWeek} deleteWeek={this.props.deleteWeek}  />
                        
                        )
                    }
                </section>


            </React.Fragment>
        )
    }
}