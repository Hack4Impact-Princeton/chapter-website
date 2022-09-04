import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HeadBanner = () => (
    <>
    <Container fluid className="container">
        <div className='bannerCont'>
            <Row className="d-flex align-items-center">
                <Col>
                    <img src="/images/colored-logo.svg" alt="Hack4Impact logo" />
                </Col>
            </Row>
        </div>
        <Row>
            <Col>
                <h1 className="text-center title">Princeton University Chapter</h1>
            </Col>
        </Row>
    </Container>
    <style jsx>{`
        .title {
            padding-bottom: 50px;
        }
        .bannerCont{
            padding: 100px;
            padding-bottom: 0px;
        }
    `
    }</style>
    </>
);

export default HeadBanner;