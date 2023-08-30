import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Section from '../section';
import ExecBoard from '../about/ExecBoard';
import ProjectTeam from '../teampage/projectTeam';

function Team({ members, alumni, execBoard }) {
  const alumByClass = (alumni, 'classOf');
  console.log(execBoard);
  console.log(members)
  return (
    <Section marginX={0} paddingX={0}>
      <Container fluid>
        <ExecBoard execBoard={execBoard} />
        <h2 className="p-5 m-3 center">Project Teams</h2>
        <Row className="justify-content-md-center">
          <Col sm="12" xs="12" md="6" lg="6" xl="6" >
            <h3 style={{ textAlign: "center" }}>African Library Team</h3>
            <ProjectTeam members={members} team={"ALP"} />
          </Col>
          <Col sm="12" xs="12" md="6" lg="6" xl="6" >
            <h3 style={{ textAlign: "center" }}>NJ Tree Team</h3>
            <ProjectTeam members={members} team={"NJTree"} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="12" xs="12" md="6" lg="6" xl="6" >
            <h3 style={{ textAlign: "center" }}>Bootcampers</h3>
            <ProjectTeam members={members} team={"Bootcamp"} />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Team;