import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Spring, Trail } from "react-spring";
import Section from "./section";
import ProjectContainer from "../homePageProject";
import ActionLink from "../actionLink";
import Projects from "../../projects.json";

function OurWorkSection() {
  /*const projectContainers = Projects.map((project) => {
    <ProjectContainer
      title={project.title}
      description={project.description}
      thumbnail={project.thumbnail}
      key={project.id}
    />;
  });*/

  return (
    <Section>
      <Container>
        <ProjectContainer
                  title="hello"
                  description="testing the styling"
                  thumbnail="https://upload.wikimedia.org/wikipedia/en/d/de/AfricanLibraryProjectLogo.png"
                  key="300"
                />
        <Spring
          config={{ delay: 600, tension: 100, fraction: 100 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {(props) => (
            <div style={props} id="our-work-title-box">
              <h2 className="title text-center">
                We believe in using tech for good.
              </h2>
              <p className="subtitle text-center">
                Each semester, we work with one to two non-profits with the
                opportunity to build a great product that solves a core need. We
                work in small groups led by a product manager and technical lead
                to scope and develop the application, taking into account our
                clients’ requirements and suggestions
              </p>
            </div>
          )}
        </Spring>

        <div className="project-showcase-box">
          <Row className="d-flex justify-content-center">
             <Col  >
              {
                Projects.map((project) => {
                  return(<div ><ProjectContainer
                  title={project.title}
                  description={project.description}
                  thumbnail={project.thumbnail}
                  key={project.id}
                /></div>)
                  })
              }
            </Col>
          </Row>
        </div>
        <Row style={{ paddingTop: "5px" }}>
          <ActionLink text="View our other projects" link="/projects" />
        </Row>
      </Container>
      <style jsx>{`
        .subtitle {
          padding-top: 10px;
          color: var(--gray);
          letter-spacing: 1px;
        }
        #our-work-title-box {
          text-align: center;
          margin: 0 20px 40px 20px;
        }
        .project-showcase-box {
          padding: 10px 10px 5px 10px;
        }
        .link {
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: normal;
          font-size: 15px;
          margin: auto;
          border-bottom: 1px solid var(--primary-blue);
          margin-top: 40px;
        }
      `}</style>
    </Section>
  );
}

export default OurWorkSection;
