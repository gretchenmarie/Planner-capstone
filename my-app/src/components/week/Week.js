import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import "./week.css"
const WeekCards = (props) => {
  return (
    <Row>
      <Col sm="9" className="weekcard">
        <Card className="weekcard" body >
          <CardTitle>Monday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body>
          <CardTitle>Tuesday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body>
          <CardTitle>Wednesday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body>
          <CardTitle>Thursday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body>
          <CardTitle>Friday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>

      <Col sm="9"className="weekcard">
        <Card body>
          <CardTitle>Saturday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="9"className="weekcard">
        <Card body>
          <CardTitle>Sunday</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default WeekCards;