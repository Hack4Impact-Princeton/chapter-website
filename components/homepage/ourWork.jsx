import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Spring, Trail } from "react-spring";
import Section from "./section";
import ProjectContainer from "../homePageProject";
import ActionLink from "../actionLink";
import Projects from "../../projects.json";

function OurWorkSection() {
  const styles = {
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: "normal",
    fontSize: "15px",
    margin: "auto",
    borderBottom: "1px solid blue",
    marginTop: "40px",
  };

  return (
    <Section>
      <Container>
        <Spring
          config={{ delay: 600, tension: 100, fraction: 100 }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {(props) => (
            <div
              style={{ textAlign: "center", margin: "0 20px 40px 20px" }}
              id="our-work-title-box"
            >
              <h2 className="title text-center">
                We believe in using tech for good.
              </h2>
              <p
                className="subtitle text-center"
                style={{ paddingTop: "10px", color: "var(--gray)" }}
              >
                Each semester, we work with one to two non-profits with the
                opportunity to build a great product that solves a core need. We
                work in small groups led by a product manager and technical lead
                to scope and develop the application, taking into account our
                clients’ requirements and suggestions
              </p>
            </div>
          )}
        </Spring>

        <div
          className="project-showcase-box"
          sx={{ padding: "10px 10px 5px 10px" }}
        >
          <Row className="d-flex justify-content-center">
            {Projects.map((project) => {
              return (
                <Col key={project.id}>
                  <ProjectContainer
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail}
                    url={project.url}
                    key={project.id}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <Row style={{ paddingTop: "5px" }}>
          <ActionLink
            text="View our other projects"
            link="/projects"
            style={styles}
          />
        </Row>
      </Container>
      <style jsx>{``}</style>
    </Section>
  );
}

export default OurWorkSection;
