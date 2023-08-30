import React from 'react';
import GradientBanner from '../components/gradientBanner';
import MissionSection from '../components/about/missionSection.jsx';
import OurValues from '../components/about/ourValues';
import Head from '../components/head';
import Team from '../components/about/team';
import fetchContent from '../utils/fetchContent';

const customStyle = {
  background: 'linear-gradient(white, var(--secondary-seafoam))',
  padding: '80px 0',
  paddingTop: 'calc(60px + var(--nav-height))',
  '@media (max-width: 800px)': {
    padding: '40px 0',
    paddingTop: 'calc(40px + var(--nav-height))',
  },
};
const projectTeamMembers = [{
  name: "Emilio Chan",
  imageurl: '/images/headshots/Emilio_Chan.jpeg',
  title: "Developer",
  projectTeam: "ALP",
  linkedIn: "https://www.linkedin.com/in/emilio-chan-59051b223/",
  classOf: 2025,
},
{
  name: "Dylan Epstein-Gross",
  imageurl: "/images/headshots/EpsteinGross_Dylan.JPG",
  title: "Tech Lead | Developer",
  projectTeam: "NJTree",
  linkedIn: "https://www.linkedin.com",
  classOf: 2026,
}
  ,
{
  name: "Daisy Zhang",
  imageurl: "/images/headshots/daisy_zhang.png",
  title: "Developer",
  projectTeam: "NJTree",
  linkedIn: "https://www.linkedin.com",
  classOf: 2026,
},
{
  name: "Connor Brown",
  imageurl: "/images/headshots/IMG_2243.PNG",
  title: "Developer",
  projectTeam: "NJTree",
  linkedIn: "https://www.linkedin.com",
  classOf: 2026,
}
  ,
{
  name: "Emily Luo",
  imageurl: "/images/headshots/IMG_6369.heic",
  title: "Product Manager | Developer",
  projectTeam: "ALP",
  linkedIn: "https://www.linkedin.com",
  classOf: 2026,
}
  ,
{
  name: "Jessica Yan",
  imageurl: "/images/headshots/Jessica_Yan.jpeg",
  title: "Developer",
  projectTeam: "Bootcamp",
  linkedIn: "https://www.linkedin.com",
  classOf: 2026,
}

]
const alumni = [{
  alumniOne: {
    name: "test",
    imageurl: '/images/<filename>',
    linkedin: "https://www.linkedin.com/",
    classOf: 2019,
  }
}]
const execBoard = [
  {
    name: "Suhani Balachandran",
    imageurl: "/images/headshots/Emilio_Chan.jpeg",
    title: "President",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  }, {
    name: "Emilio Chan",
    imageurl: '/images/headshots/Emilio_Chan.jpeg',
    title: "Vice President",
    linkedIn: "https://www.linkedin.com/in/emilio-chan-59051b223/",
    classOf: 2025,
  },
  {
    name: "Willow Yang",
    imageurl: "/images/headshots/Emilio_Chan.jpeg",
    title: "Treasurer",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  },
  {
    name: "Matthew Drapkin",
    imageurl: "/images/headshots/Emilio_Chan.jpeg",
    title: "Internal Outreach Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  },
  {
    name: "Gracy Bhardwaj",
    imageurl: "/images/headshots/Emilio_Chan.jpeg",
    title: "External Outreach Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  }
  ,
  {
    name: "Derek Geng",
    imageurl: "/images/headshots/Emilio_Chan.jpeg",
    title: "Membership Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  },
  ,
  {
    name: "Maggie Wang",
    imageurl: "/images/headshots/Emilio_Chan.jpeg",
    title: "Membership Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  },]
function TeamPage() {
  const subHeading = "Our team is composed of creative individuals who care passionately about social good and technology’s huge potential to empower activists and humanitarians."
  const oldSubheading = "Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
  return (
    <>
      <Head title="About Us" />
      <GradientBanner
        title="Meet Our Team"
        subHeadline={subHeading}
        style={customStyle}
        arrow
      />
      <Team members={projectTeamMembers} alumni={alumni} execBoard={execBoard} />
    </>
  );
}

export default TeamPage;