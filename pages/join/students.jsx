import Head from "../../components/head"
import GradientBanner from "../../components/gradientBanner"
import { Container, Row, Col } from 'reactstrap'
import Section from "../../components/section"
import ActionButton from "../../components/actionButton"
import Timeline from "../../components/apply/timeline"
import { recruitmentTimeline } from "../../utils/recruitmentTimeline"
const StudentsPage = ({ }) => {
    return (
        <>
            <Head title="Join Us | Students" />
            <GradientBanner
                title={'Students'}
                subHeadline={
                    'Hack4Impact isn’t just for nonprofits. Our work provides us a unique opportunity to learn and develop technical skills. Education is at the core of Hack4Impact’s mission, and we work hard to create an environment where we are always learning from our work — and from each other.'
                }></GradientBanner>
            <Section>

                <h1 style={{ textAlign: "center", textDecoration: "underline" }}>Positions</h1>
                <Container fluid>
                    <Row className="justify-content-center align-items-center">
                        <Col md="5" sm="9" xs="12" lg="5" xl="5" className="text-center m-3">
                            <img
                                src="/images/developer-icon2.svg"
                                alt="Developer Icon"
                                height="60px"
                            />
                            <h3 style={{ fontWeight: 800 }} className="mt-2">Developer</h3>
                            <p>Application: Due TBD</p>
                            <p style={{ textAlign: "left", marginBottom: 25 }}>
                                Developers will complete a 7-session bootcamp this fall to ensure
                                that everyone is starting from an appropriate skill baseline. So
                                underclassmen, don’t think inexperience should stop you from
                                applying! The bootcamp will cover aspects of both front and
                                back-end engineering with the MERN tech stack. Completion of the
                                bootcamp means developers will be equipped to work on projects
                                this spring.
                            </p>
                            <ActionButton link="https://google.com">
                                Apply
                            </ActionButton>
                        </Col>
                        <Col md="5" sm="9" xs="12" lg="5" xl="5" className="text-center m-3">
                            <img
                                src="/images/designer.svg"
                                alt="UI/UX Designer Icon"
                                height="60px"
                            />
                            <h3 className="mt-2">UI/UX Designer</h3>
                            <p>Application: Due TBD</p>
                            <p style={{ textAlign: "left", marginBottom: 25 }}>
                                UI/UX designers work with Product Managers (PM's) to determine the
                                look and flow of an application. Starting with working from a PM’s
                                Product Requirements Doc, designers will use Figma to make low,
                                then high fidelity mock-ups of the application. During the spring
                                semester, design work will be concentrated during the beginning of
                                the semester, then decrease in workload after the midpoint.
                            </p>
                            <ActionButton link="https://google.com">
                                Apply
                            </ActionButton>

                        </Col>
                    </Row>
                </Container>
            </Section>
            <Section darkgrey>

                <h1 style={{ textAlign: "center" }}>Application Timeline</h1>
                <Timeline steps={recruitmentTimeline} />
            </Section>

        </>
    )
}
export default StudentsPage