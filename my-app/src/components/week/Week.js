import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./week.css"
import {Link} from "react-router-dom"
const WeekCards = (props) => {
  return (


    <Row>

      <Col sm="9" className="weekcard">
        <Card className="monday" body >
          <CardTitle>Monday</CardTitle>
          <CardText> With supporting text below as a natural lead-in to additional content.</CardText>
          <Link className="nav-link" to={`/tasks`}> <Button>Task List </Button></Link>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body className="tuesday">
          <CardTitle>Tuesday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link className="nav-link" to={`/tasks`}> <Button>Task List </Button></Link>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body className="wednesday">
          <CardTitle>Wednesday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link className="nav-link" to={`/tasks`}> <Button>Task List </Button></Link>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body className= "thursday">
          <CardTitle>Thursday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link className="nav-link" to={`/tasks`}> <Button>Task List </Button></Link>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body className="friday">
          <CardTitle>Friday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link className="nav-link" to={`/tasks`}> <Button>Task List </Button></Link>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body className="saturday">
          <CardTitle>Saturday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link className="nav-link" to={`/tasks`}> <Button>Task List </Button></Link>
        </Card>
      </Col>
      <Col sm="9"className="weekcard">
        <Card body className="sunday">
          <CardTitle>Sunday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Link className="nav-link" to={`/tasks`}> <Button>Task List </Button></Link>
        </Card>
      </Col>
    </Row>
  );
};

export default WeekCards;