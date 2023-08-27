import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { Spring, config } from 'react-spring/renderprops.cjs';
import ActionButton from "../actionButton";

const Banner = () => (
  <>
    <Container fluid className="container">
      <div className="bannerCont">
        <Row className="d-flex align-items-center">
          <Col md="7">
            <img src="/images/banner_sample.svg" alt="" />
          </Col>
          <Col md="5">
            <h1>In the Nation’s Service and In the Service of Humanity</h1>
            <br></br>
            <p>
              We empower engineers, designers, activists, and humanitarians to
              create lasting and impactful social change. If you're a student or
              a nonprofit, we'd love to get in touch!
            </p>
            <br></br>
            <div>
              <ActionButton className="mr-3" link="/apply">
                Apply
              </ActionButton>
              <ActionButton white link="/about">
                Learn More
              </ActionButton>
            </div>
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
