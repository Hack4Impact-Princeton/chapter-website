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
const projectTeamMembers = [
  {
    name: "Willow Yang",
    imageurl: "/icons/favicon-200.png",
    title: "Product Manager | Developer",
    projectTeam: "NJTree",
    linkedIn: "https://www.linkedin.com",
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
    name: "Suhani Balachandran",
    imageurl: "/icons/favicon-200.png",
    title: "UI/UX Designer",
    projectTeam: "NJTree",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  },
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
  , {
    name: "Quon Howery",
    imageurl: "/icons/favicon-200.png",
    title: "Developer",
    projectTeam: "NJTree",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  },
  {
    name: "Emily Luo",
    imageurl: "/images/headshots/Emily_Luo.PNG",
    title: "Product Manager | Developer",
    projectTeam: "ALP",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  }
  , {
    name: "Derek Geng",
    imageurl: "/icons/favicon-200.png",
    title: "Tech Lead | Developer",
    projectTeam: "ALP",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  }, {
    name: "Helena Richardson",
    imageurl: "/icons/favicon-200.png",
    title: "UI/UX Designer",
    projectTeam: "ALP",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  },
  {
    name: "Emilio Chan",
    imageurl: '/images/headshots/Emilio_Chan.jpeg',
    title: "Developer",
    projectTeam: "ALP",
    linkedIn: "https://www.linkedin.com/in/emilio-chan-59051b223/",
    classOf: 2025,
  }, {
    name: "Harbin Hong",
    imageurl: "/icons/favicon-200.png",
    title: "Developer",
    projectTeam: "ALP",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  }, {
    name: "Matthew Drapkin",
    imageurl: "/icons/favicon-200.png",
    title: "Developer",
    projectTeam: "ALP",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  },
  {
    name: "Jessica Yan",
    imageurl: "/images/headshots/Jessica_Yan.jpeg",
    title: "Developer",
    projectTeam: "Bootcamp",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  },
  {
    name: "William Zhang",
    imageurl: "/images/headshots/William_Zhang.jpeg",
    title: "Developer",
    projectTeam: "ALP",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026
  }, {
    name: "Maggie Wang",
    imageurl: "/icons/favicon-200.png",
    title: "Developer",
    projectTeam: "NJTree",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026
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
    imageurl: "/icons/favicon-200.png",
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
    imageurl: "/icons/favicon-200.png",
    title: "Treasurer",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  },
  {
    name: "Matthew Drapkin",
    imageurl: "/icons/favicon-200.png",
    title: "Internal Outreach Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2025,
  },
  {
    name: "Gracy Bhardwaj",
    imageurl: "/images/headshots/Gracy_Bhardwaj.png",
    title: "External Outreach Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  }
  ,
  {
    name: "Derek Geng",
    imageurl: "/icons/favicon-200.png",
    title: "Membership Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  },
  ,
  {
    name: "Maggie Wang",
    imageurl: "/icons/favicon-200.png",
    title: "Membership Chair",
    linkedIn: "https://www.linkedin.com",
    classOf: 2026,
  },]
function TeamPage() {
  const subHeading = "Our team is composed of creative individuals who care passionately about social good and technology’s huge potential to empower activists and humanitarians."
  const oldSubheading = "Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
  return (
    <>
      <Head title="Our Team" />
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