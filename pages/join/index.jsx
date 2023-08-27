import React from "react";
import GradientBanner from "../../components/gradientBanner";
import Head from "../../components/head";
import { Container } from "reactstrap";
import InvolveSection from "../../components/involveSection";
import Section from "../../components/section";

function ApplyPage() {
  const customStyle = {
    background: "linear-gradient(white, var(--secondary-seafoam))",
    padding: "80px 0",
    paddingTop: "calc(60px + var(--nav-height))",
    "@media (max-width: 800px)": {
      padding: "40px 0",
      paddingTop: "calc(40px + var(--nav-height))",
    },
  };
  return (
    <>
      <Head title="Apply" />
      <GradientBanner
        title="Join Us"
        subHeadline="We're open to students and nonprofits of all backgrounds, no matter your project or technical expertise."
        style={customStyle}
        arrow
      />
      <Section>
        <Container>
          <InvolveSection />
        </Container>
      </Section>
    </>
  );
}

export default ApplyPage;
