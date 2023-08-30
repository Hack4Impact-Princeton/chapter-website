import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MemberIcon from '../memberIcon';
function ExecBoard({ execBoard }) {
  return (
    <Container lg="12" xl="12" md="12" sm="12" xs="12">
      <h3 className="p-2 m-3 center">Executive Board</h3>
      <Row className="justify-content-md-center">

        {execBoard
          .map((member) => (
            <Col xs="6" sm="6" md="4" lg="3" xl="3" key={member.name}>
              <MemberIcon
                key={member.name}
                name={member.name}
                imageurl={member.imageurl}
                title={member.title}
                linkedIn={member.linkedIn}
              />
            </Col>
          ))}
      </Row>

    </Container>
  );
}

export default ExecBoard;