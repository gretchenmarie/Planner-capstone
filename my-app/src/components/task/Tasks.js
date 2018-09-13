import React, {Component} from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import EditTask from './EditTask'
import "./Tasks.css"



export default class Tasks extends Component {

   render() {
       return (
       <div>
            Hello
         <TaskForm {...this.props}/>
           <TaskList {...this.props}/>
           <EditTask {...this.props}/>
       </div>
       )
   }
}

