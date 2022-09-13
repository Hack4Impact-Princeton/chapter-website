import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ApplicationLinksSection = () => (
    <>
    <Container>
        <div id="involved-container">
            <Row className="d-flex align-items-start">
                <Col className="mr-4 p-4">
                    <img className="text-center icon" src="/images/designer.svg" alt="UI/UX Designer Icon" />
                    <h3 className="text-center title">Designer</h3>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCckiQjdqbRT2aXydy27LfKsmrl88XvtLrzapIn5bFbBU8zw/viewform" target="_blank">
                        <p className="text-center">Application (Due September 17th)</p>
                    </a>
                    <p className="text-justify">
                        UI/UX designers work with Product Managers (PM's) to determine the look and flow of an application. Starting with working from a PM’s Product Requirements Doc, designers will use Figma to make low, then high fidelity mock-ups of the application. During the spring semester, design work will be concentrated during the beginning of the semester, then decrease in workload after the midpoint. 
                    </p>
                </Col>
                <Col className="mr-4 p-4">
                    <img className="text-center icon" src="/images/developer-icon2.svg" alt="Developer Icon" />
                    <h3 className="text-center title">Developer</h3>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFb42E3RU2UP-poxZXk8ro-6TQQKGxSYniifPeBrVL-mgIyA/viewform" target="_blank">
                        <p className="text-center">Application (Due October 3rd)</p>
                    </a>
                    <p className="text-justify">
                        Developers will complete a 7-session bootcamp this fall to ensure that everyone is starting from an appropriate skill baseline. So underclassmen, don’t think inexperience should stop you from applying! The bootcamp will cover aspects of both front and back-end engineering with the MERN tech stack. Completion of the bootcamp means developers will be equipped to work on projects this spring.
                    </p>
                </Col>
                <Col className="p-4">
                    <img className="text-center icon" src="/images/liaison-icon.svg" alt="Liaison Icon" />
                    <h3 className="text-center title">Nonprofit Liaison</h3>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfp-NaUthvFcaKfrrk9NioM9dWdBQY6MeCkE1juvV6H-RCSTg/viewform" target="_blank">
                        <p className="text-center">Application (Due October 3rd)</p>
                    </a>
                    <p className="text-justify">
                        The nonprofit outreach team works on sourcing projects for Hack4Impact. Coordinators will learn how to pitch Hack4Impact’s services and discern what issues are and are not suitable for a H4I project. One of H4I Princeton’s goals is also to establish a working collaboration with the Pace Center, so outreach coordinators may work with Pace to set up civic service internships to develop Princeton’s relationship with community partners. 
                    </p>
                </Col>
            </Row>
        </div>
    </Container>
    <style jsx>{`
        .icon {
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: 3.5em;
            padding-bottom: 8px;
        }
        #involved-container {
            padding-top: 10px;
        }
    `
    }</style>
    </>
);

export default ApplicationLinksSection;