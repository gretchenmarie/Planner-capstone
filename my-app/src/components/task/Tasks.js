import React, {Component} from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import TaskCard from './TaskCard'



export default class Tasks extends Component {

   render() {
       return (
       <div>

           <TaskForm {...this.props}/>
           <TaskList {...this.props}/>
           <TaskCard {...this.props}/>
       </div>
       )
   }
}

