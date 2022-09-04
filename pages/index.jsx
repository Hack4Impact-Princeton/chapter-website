import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';

import Head from '../components/homepage/head';
import HeadBanner from '../components/homepage/headbanner';
import Banner from '../components/homepage/banner';
import Section from '../components/homepage/section';
import Nav from '../components/navbar';

function HomePage() {
  const router = useRouter();
  const activeRoute = router.pathname;

  return (
      <>
        <HeadBanner />
        <Head title="Hack4Impact Princeton" />
        {/* TODO: figure out why NavBar looks ugly/doesn't style properly */}
        {/* <Nav /> */}
        <ToastContainer />
        <Banner />
        {/* <OurWorkSection projects={previewProjects} /> */}
        <Section grey>
          <Container>
            <h2 className="text-center">Fall Recruiting Cycle</h2>
            {/* <InvolveSection /> */}
          </Container>
        </Section>
        {/* <PartnerSection /> */}
        {/* <OtherChapters chapterLogos={chapterLogos} /> */}
      </>
  );
}

export default HomePage;