import React from 'react';
import Faq from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import ServicesDetail from '../../components/apply/nonprofit/servicesDetail';
// import QuoteSection from '../../components/quoteSection';
// import Quote from '../../components/quote';
// import ApplicationProcess from '../../components/apply/applicationProcess';
import Head from '../../components/head';
// import ActionButton from '../../components/actionButton';
// import fetchContent from '../../utils/fetchContent';

function NonProfits({
    // description,
    // timelineCollection,
    // testimonialsCollection,
    // faqsCollection,
}) {
    const description = <>
        <p>
            {'That’s awesome! We’d love to talk with you, so please email '}
            <a href="princeton@hack4impact.org">princeton@hack4impact.org</a>
            {' and we’ll get back to you as soon as we can. \nWe want to help maximize your nonprofit’s impact, and we’re serious about project quality. We’ll communicate frequently and work with you closely to ensure we’re building exactly what you need'}
        </p>
    </>
    const faqsCollection = [
        {
            question: "What type of projects do you work on?", answer: <><p>
                We work on a variety of web based applications. These can range from
                volunteer management systems to custom interactive map embeds. Some
                examples of tools to consider include:
            </p>
                <ul>
                    <li>
                        A platform that allows you to keep track of the organization's
                        activities and see where cost-cutting can occur
                    </li>
                    <li>
                        A database system that allows you to more easily search through
                        previous financial, client, or service records
                    </li>
                    <li>
                        An application to keep track of your clients and better assess
                        your overall impact
                    </li>
                </ul>
                <p>
                    Make sure to also visit our{" "}
                    <a href="../our-work">
                        {" "}
                        completed and current projects page{" "}
                    </a>
                    to see what types of applications we've built and are building. Our
                    main focus is on software engineering and developer education, so
                    our current offerings <strong>do not</strong> include:
                </p>
                <ul>
                    <li>
                        <strong>Basic website design and development</strong>
                        <br />
                        We do not build websites that are purely content-based, such as
                        Wordpress blogs or landing pages.
                    </li>
                    <li>
                        <strong>Technology integration or consulting.</strong>
                        <br />
                        We do not set up or integrate existing solutions such as
                        Salesforce or Drupal.
                    </li>
                </ul>
            </>
        }, {
            question: "What does it look like to work with Hack4Impact?", answer: <>
                Before the development semester{'('}s{')'}:
                <ul>
                    <li>The first step is an initial screening meeting with our external outreach chair where you can discuss your nonprofit's needs, any ideas you have, the feasibility of the project. You don't come to us with concrete ideas, but the more you have, the better</li>
                    <li>Once accepted, you will have a follow-up meeting with the external outreach chair and the team's Product Manager to discuss your specific needs for the project {'('}e.g. features that the project must have{')'}. During this meeting, you and the Product Manager will decide on a minimum viable producet {'('}MVP{')'} that we feel we can comfortably create by the decided deadline. At some point, you will also communicate any "stretch" goals you have for the product - features that would be nice to have but that are not mandatory.</li>
                </ul>
                During the development semester{'('}s{')'}:
                <ul>
                    <li>Depending on availability and need, we will set up weekly or biweekly meetings where we can update you on current progress and request feedback on designs and other product ideas.</li>
                </ul>
                After the development semester{'('}s{')'}:
                <ul>
                    <li>We will hand off the project to you, usually in the form of a publicly accessible URL. During the period following the hand-off, you may request that we fix any bugs that you or your users may encounter.</li>
                </ul>


            </>
        }
    ]

    return (
        <>
            <Head title="H4I Apply | Nonprofits" />
            <GradientBanner
                title={'Nonprofit Organizations'}
                subHeadline={
                    'As a nonprofit, you deliver tremendous social value to the community every day. What if you could leverage technology to make your work even more efficient, effective, or far-reaching?'
                }>
            </GradientBanner>
            <ServicesDetail title="Interested in working with Hack4Impact?" content={description} />
            {faqsCollection && <Faq questions={faqsCollection} />}
        </>
    );
}

export default NonProfits;

// export async function getStaticProps() {
//     const {
//         pennWebsiteLayout: { nonprofitApplication },
//     } = await fetchContent(`
//   {
//     pennWebsiteLayout(id: "${process.env.LAYOUT_ENTRY_ID}") {
//       nonprofitApplication {
//         applicationLink
//         openRolesLink
//         description {
//           json
//         }
//         timelineCollection {
//           items {
//             header
//             body {
//               json
//             }
//             image {
//               url
//               description
//             }
//           }
//         }
//         testimonialsCollection {
//           items {
//             author
//             quote {
//               json
//             }
//           }
//         }
//         faqsCollection {
//           items {
//             question
//             answer {
//               json
//             }
//           }
//         }
//       }
//     }
//   }
//   `);

//     return {
//         props: nonprofitApplication,
//     };
// }