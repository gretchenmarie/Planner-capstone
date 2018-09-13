import React, { Component } from "react"
import Nav from "./navbar/Nav"
import ApplicationViews from "./ApplicationViews"
import "bootstrap/dist/css/bootstrap.min.css"
//import "./Planner.css"

class Planner extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <ApplicationViews />
         </React.Fragment>
        )
     }
  }

export default Planner