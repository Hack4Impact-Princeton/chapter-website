import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Spring, config } from 'react-spring/renderprops.cjs';

const Banner = () => (
  <>
  <Container fluid className="container">
      <div className='bannerCont'>
        <Row className="d-flex align-items-center">
            <Col md="7">
                <img src="/images/banner_sample.svg" alt="" />
            </Col>
            <Col md="5">
                <h1>In the nation’s service and in the service of humanity</h1>
                <p>The Princeton chapter is in its incubating phase this fall. Opportunities to join us open every semester!</p>
            </Col>
        </Row>
      </div>
  </Container>
    <style jsx>{`
      $tablet-width: 800px;

      .bannerCont {
        padding: 120px 0;
        padding-top: calc(60px + var(--nav-height));

        @media (max-width: $tablet-width) {
          padding: 80px 0;
          padding-top: calc(40px + var(--nav-height));
        }

        h1 {
          font-size: 54px !important;
          margin-bottom: 30px;

          @media (max-width: 400px) {
            font-size: 42px !important;
          }
        }
        .sub-headline {
          font-size: 18px;
          margin-bottom: 40px;
        }
      }
      .banner-img {
        width: 100%;
        height: auto;
      }
      .banner-section {
        height: 650px;
        padding-top: 150px;
        background-size: cover;

        @media (max-width: $tablet-width) {
          background-size: contain;
        }
      }

      .cta-box {
        padding-top: 7px;
        align-content: left;
      }
    `}</style>
  </>
);

export default Banner;