import React from 'react';
import GradientBanner from '../components/gradientBanner';
import MissionSection from '../components/about/missionSection.jsx';
import OurValues from '../components/about/ourValues';
import Head from '../components/head';
import Team from '../components/about/team';
import fetchContent from '../utils/fetchContent';

function AboutPage() {

  // member information and structure
  /* fields: {name: string, image: {url: string}, linkedin: string, classOf: number}
  Not including: memberSlug - note, delete the a tag around the img in membericon*/
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
    linkedIn:"https://www.linkedin.com/in/emilio-chan-59051b223/",
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
  const alumni = [{alumniOne: {
    name: "test",
    imageurl: '/images/<filename>',
    linkedin:"https://www.linkedin.com/",
    classOf: 2019,
  }}]
  const execBoard = [ 
    {
      name: "Suhani Balachandran",
      imageurl: "/images/headshots/Emilio_Chan.jpeg",
      title: "President",
      linkedIn: "https://www.linkedin.com",
      classOf: 2025,
    },{
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
}, 

]
  return (
    <>
      <Head title="About Us" />
      <GradientBanner
        title="Meet Our Team"
        subHeadline="Hack4Impact believes in technology’s huge potential to empower activists and humanitarians to create lasting and impactful social change. We work to foster the wider adoption of software as a tool for social good."
        style= {customStyle}
        arrow
      />
      {/* <MissionSection />
      <OurValues/> */}
      <Team members={projectTeamMembers} alumni={alumni} execBoard={execBoard} />
    </>
  );
}

export default AboutPage;

// export async function getStaticProps() {
//   const {
//     pennWebsiteLayout: {
//       chapterValuesCollection,
//       execBoardCollection,
//       membersCollection,
//       alumniCollection,
//     },
//   } = await fetchContent(`
//   fragment profile on PennMemberProfile{
//     name
//     title
//     image {
//       url
//     } 
//     linkedIn
//     classOf
//     urlSlug
//   } 
  
//   {
//     pennWebsiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
//       chapterValuesCollection {
//         items {
//           header
//           body {
//             json
//           }
//           image {
//             url
//             description
//           }
//         }
//       }
//       execBoardCollection {
//         items {
//           ...profile
//         }
//       }
//       membersCollection {
//         items {
//           ...profile
//         }
//       }
//       alumniCollection {
//         items {
//           ...profile
//         }
//       }
//     }
//   }
//   `);
//   return {
//     props: {
//       values: chapterValuesCollection.items,
//       members: membersCollection.items,
//       alumni: alumniCollection.items,
//       execBoard: execBoardCollection.items,
//     },
//   };
// }