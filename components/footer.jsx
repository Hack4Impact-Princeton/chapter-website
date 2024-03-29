import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

function Footer() {
  return (
    <section className="footer-section">
      <Container>
        <Row>
          <Col md="5" xs="12" className="footer-left-div">
            <div className="footer-logo-box">
              <img src="/images/logo-white.svg" height="60" width="240" alt="Hack4Impact logo" />
            </div>
            <p>
              For all inquiries of partnership or sponsorship, please contact us at{' '}
              {/* TODO: Update this for your university! */}
              <a className="email-link" href="mailto:princeton@hack4impact.org">
                princeton@hack4impact.org
              </a>
              .
            </p>
          </Col>
          <div className="col-md-1" />
          <div className="col-md-2 ">
            <h4>About Us</h4>
            <ul>
              <li>
                <Link href="/team">
                  <a>Our Team</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Join Us Now</h4>
            <ul>
              <li>
                <Link href="/join">
                  <a>How to join</a>
                </Link>
              </li>
              <li>
                <Link href="/join/students">
                  <a>Students</a>
                </Link>
              </li>
              <li>
                <Link href="/join/nonprofits">
                  <a>Non-profits</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Follow us</h4>
            <ul>
              {/* TODO: Update these for your university! */}
              <li>
                <a href="https://www.linkedin.com/company/hack4impact/mycompany/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/hack4impact-princeton">Github</a>
              </li>
              <li>
                <a href="https://medium.com/@hack4impact">Blog</a>
              </li>
              <li>
                <a href="mailto:princeton@hack4impact.org">Email</a>
              </li>
              <li>
                <a href="https://www.facebook.com/Hack4Impact">Facebook</a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
      <style jsx>{`
        .footer-section {
  background-color: var(--primary-blue);
  min-height: 350px;
  padding-top: 70px;
  color: white;
  font-size: 15px;
}

.footer-logo-box {
  margin-bottom: 20px;
}

.footer-section h4 {
  font-size: inherit;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-section a,
.footer-section a:visited {
  color: inherit;
}

.footer-section a.email-link {
  text-decoration: underline !important;
  margin-left: 0;
}

.footer-section a:hover {
  color: var(--secondary-seafoam);
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  padding-bottom: 5px;
}

      `}</style>
    </section>
  );
}

export default Footer;