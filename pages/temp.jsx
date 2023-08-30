import React from "react";
import Nav from "../components/navbar";

import Banner from "../components/homepage/banner";
import OurWorkSection from "../components/homepage/ourWork";
import InvolveSection from "../components/involveSection";
// import PartnerSection from '../components/homepage/partnerSection';
// import OtherChapters from '../components/homepage/otherChapters';
import { ToastContainer } from "react-toastify";
import Head from "../components/homepage/head";
//import fetchContent from "../utils/fetchContent";
import Section from "../components/homepage/section";
import { Container } from "reactstrap";
import HeadBanner from "../components/homepage/headbanner";
import MissionSection from "../components/about/missionSection";

function Home(/*{ chapterLogos, previewProjects }*/) {
  return (
    <>
      <Head title="Hack4Impact" />
      <ToastContainer />
      {/*<HeadBanner />*/}
      <div style={{ paddingBottom: "150px" }}></div>
      <Banner />
      <div style={{ paddingBottom: "50px" }}></div>
      <MissionSection />
      {/*<OurWorkSection />
      <Section lightblue>
        <Container>
          <h2 className="text-center">Get Involved</h2>
          <InvolveSection />
        </Container>
        <br></br>
        <br></br>
  </Section>*/}

      {/* <PartnerSection /> 
      <OtherChapters chapterLogos={chapterLogos} /> */}
    </>
  );
}

export default Home;
/*
export async function getStaticProps() {
  const {
    chapterCollection,
    pennWebsiteLayout: { projectsCollection },
  } = await fetchContent(`
  {
    chapterCollection {
      items {
        name
        websiteLink
        socialMediaLink
        codeRepoLink
        universityLogo {
          url
        }
      }
    }
    pennWebsiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
      projectsCollection(limit: 3) {
        items {
          title
          description {
            json
          }
          thumbnail {
            url
            description
          }
          urlSlug
        }
      }
    }
  }
  `);
  return {
    props: {
      chapterLogos: chapterCollection.items.map(
        ({ websiteLink, socialMediaLink, codeRepoLink, ...chapter }) => ({
          ...chapter,
          // not all chapters have a website,
          // so we need to have some solid fallbacks
          link:
            websiteLink ??
            socialMediaLink ??
            codeRepoLink ??
            "https://hack4impact.org",
        })
      ),
      previewProjects: projectsCollection.items,
    },
  };
}
*/
