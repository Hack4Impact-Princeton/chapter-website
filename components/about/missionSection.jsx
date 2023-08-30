/*
  Mission Section holding the photo and our mission in the /about page
*/
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Spring } from 'react-spring';

const values = [
  {
    title: 'Go for it',
    description:
      'Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.',
    color: '#0094FF',
  },
  {
    title: 'Be open minded',
    description:
      'Our process depends on openness to different people, topics, and perspectives. We embrace difference and work against intolerance to foster an inclusive environment. Our goal is to expose our members to the vast opportunities and daunting challenges in our work',
    color: '#FF9BCB',
  },
  {
    title: 'Go beyond technology',
    description:
      'Technology is only one tool we use in our greater mission for social impact. Technology alone is not enough. We learn from, work with, and are inspired by others who are tackling social problems using a multitude of tools.',
    color: '#EF6F6F',
  },
  {
    title: 'Engage your community',
    description:
      'Our community makes us special. The strength of our community comes from the contributions of its members. We welcome new members with warmth, and we make the effort to know each other beyond superficial details.',
    color: '#EFCD54',
  },
  {
    title: 'Develop with care.',
    description:
      'We build with others in mind. Empathy and compassion are crucial to serving our partner organizations and members. When we embark on projects, we work to deeply understand the people who we are helping.',
    color: '#00C3AC',
  },
];
const MissionSection = () => (
  <section className="mission-section">
    <Container>
      <Row>
        <Col md="12" className="text-center">
          <h2 className="project-detail-title">Our Mission</h2>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="text-center">
          <p className="mission-body-text">
            Hack4Impact exists for both nonprofits and students. We connect student software
            developers with nonprofits and other socially responsible businesses to develop powerful
            new tools for social change. This enables nonprofits to further their mission and better
            engage their clients. We are committed to increasing awareness of technology&#39;s
            potential for good.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="12" className="text-center">
          <h2 className="project-detail-title" style={{ marginTop: 35 }}>Our Values</h2>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <h4 style={{ fontWeight: 800, textAlign: "center" }}>Go beyond technology</h4>
          <ul>
            <li>
              Technology is only one tool we use in our greater mission for social impact. Technology alone is not enough. We learn from, work with, and are inspired by others who are tackling social problems using a multitude of tools.
            </li>
          </ul>
        </Col>
        <Col md="4">
          <h4 style={{ fontWeight: 800, textAlign: "center" }}>Engage your community</h4>
          <ul>
            <li>
              We build with others in mind. Empathy and compassion are crucial to serving our partner organizations and members. When we embark on projects, we work to deeply understand the people who we are helping.
            </li>
          </ul>
        </Col>
        <Col md="4">
          <h4 style={{ fontWeight: 800, textAlign: "center" }}>Go for it</h4>
          <ul>
            <li>
              Organizational roles do not determine the value of an idea: great ideas can come from anyone and anywhere. We grow because we are always trying something new.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-md-center m-3">
        <Col md="4">
          <h4 style={{ fontWeight: 800, textAlign: "center" }}>Be open minded</h4>
          <ul>
            <li>
              Our process depends on openness to different people, topics, and perspectives. We embrace difference and work against intolerance to foster an inclusive environment. Our goal is to expose our members to the vast opportunities and daunting challenges in our work.
            </li>
          </ul>
        </Col>
        <Col md="4">
          <h4 style={{ fontWeight: 800, textAlign: "center" }}>Develop with Care</h4>
          <ul>
            <li>
              We build with others in mind. Empathy and compassion are crucial to serving our partner organizations and members. When we embark on projects, we work to deeply understand the people who we are helping.
            </li>
          </ul>
        </Col>
      </Row>
      {/* <Row>
        <Spring
          from={{ transform: 'translate3d(0,300px,0)' }}
          to={{ transform: 'translate3d(0,0,0)' }}>
          {(props) => (
            <div className="text-center img-holder">
              <img
                alt="Fall 2019 team"
                style={props}
                src="/images/fa19-team.jpg"
                className="shadow"
                id="mission-team"
              />
            </div>
          )}
        </Spring>
      </Row> */}
    </Container>
    <style jsx>{`
      @media (max-width: 768px) {
        #mission-team {
          width: 100%;
        }
        .img-holder {
          overflow: hidden;
          max-width: 100%;
        }
      }
      #mission-team {
        max-width: 700px;
        margin-top: 30px;
      }
      .mission-body-text {
        color: #323648;

        font-weight: 550;
        letter-spacing: 0.6px;
      }
    `}</style>
  </section>
);

export default MissionSection;