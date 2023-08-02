import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';

import Head from '../components/homepage/head';
import HeadBanner from '../components/homepage/headbanner';
import Banner from '../components/homepage/banner';
import Section from '../components/homepage/section';
import Nav from '../components/navbar';
import ApplicationLinksSection from '../components/homepage/applicationLinksSection';

function HomePage() {
  const router = useRouter();
  const activeRoute = router.pathname;

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
        <h1>We at Hack4Impact Princeton will be back soon!</h1>
      </div>
      {/* <HeadBanner />
        <Head title="Hack4Impact Princeton" /> */}
      {/* TODO: figure out why NavBar looks ugly/doesn't style properly */}
      {/* <Nav /> */}
      {/* <ToastContainer />
        <Banner /> */}
      {/* <OurWorkSection projects={previewProjects} /> */}
      {/* <Section lightblue>
          <Container>
            <h2 className="text-center">Fall Recruiting Cycle</h2>
            {<ApplicationLinksSection />}
          </Container>
        </Section> */}
      {/* <PartnerSection /> */}
      {/* <OtherChapters chapterLogos={chapterLogos} /> */}
    </>
  );
}

export default HomePage;