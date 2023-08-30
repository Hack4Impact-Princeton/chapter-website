import { Container, Row, Col } from 'reactstrap'
import MemberIcon from '../memberIcon'
const ProjectTeam = ({ members, team }) => {
    return (
        <Row className="justify-content-md-center m-3">
            {members.filter(member => member.projectTeam === team)
                .map((member) => (
                    <Col xs="6" sm="6" md="6" lg="6" xl="6" key={member.name}>

                        <MemberIcon
                            key={member.name}
                            name={member.name}
                            title={member.title}
                            imageurl={member.imageurl}
                            // memberSlug={`/team/${member.urlSlug}`}
                            linkedIn={member.linkedIn}
                        />
                    </Col>
                ))}
        </Row>
    )
}
export default ProjectTeam