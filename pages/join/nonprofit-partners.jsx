const JoinNonprofit = () => {
  return (
    <main className="flex-start flex h-full w-full flex-col items-center space-y-16">
      <h1 className="text-center text-5xl">Nonprofit Organizations</h1>
      <p className="w-2/3 text-center text-lg lg:w-1/2">
        As a nonprofit, you deliver tremendous social value to the community
        every day. What if you could leverage technology to make your work even
        more efficient, effective, or far-reaching?
      </p>
      <h2 className="text-center text-4xl">
        Interested in working with Hack4Impact?
      </h2>
      <p className="text-md w-2/3 text-left">
        Thats great! Reach out to us at
        <a href="mailto:princeton@hack4impact.org" className="text-blue-700">
          {" "}
          princeton@hack4impact.org{" "}
        </a>
        to get started and we will get back to you as soon as we can. You don't
        need to have a fully-fleshed out idea - we just want to hear about your
        organization and any technical needs you may have. We do not charge for
        our services.
      </p>
      <section className="flex h-fit w-5/6 flex-col items-center justify-start space-y-10 border border-black lg:flex-row lg:items-start lg:justify-between lg:space-x-16">
        <div
          id="workflow"
          className="space-around mb-10 flex w-full flex-col items-center space-y-2 border border-black"
        >
          <h2 className="text-left text-2xl font-bold">Nonprofit Workflow</h2>
          <div className="flex w-full flex-row items-start justify-center space-x-2">
            <p className="w-1/3 text-right font-bold">
              Initial Meeting{"("}s{")"} - prior to the target semester:
            </p>
            <p className="w-2/3 text-left">
              The initial meeting is a discussion about your nonprofit and its
              needs. You will meet with the External Outreach Chair and a
              Product Manager to discuss possible ideas and the viability of
              such ideas. After the initial meeting, if the project is accepted,
              you will decide, together with the External Outreach Chair and the
              Product Manager, what an appropriate Minimum Viable Product {"("}
              MVP{")"} would look like.
            </p>
          </div>
          <div className="flex w-full flex-row items-start justify-center space-x-2">
            <p className="w-1/3 text-right font-bold">
              Recurring Progress Meetings: During the semester{"("}s{")"}:
            </p>
            <p className="w-2/3 text-left">
              Depending on the scope of the project, the project will take one
              or two semesters. Generally, projects take two semesters. During
              this time, as our team is hard at work developing your product,
              you will meet on a regular basis {"("}generally weekly or biweekly
              {")"} with the External Outreach Chair and the Product Manager to
              discuss the progress so far, to give any feedback on updates
              provided on our end, and to provide new ideas that you may have.
            </p>
          </div>
          <div className="flex w-full flex-row items-start justify-center space-x-2">
            <p className="w-1/3 text-right font-bold">Handoff:</p>
            <p className="w-2/3 text-left">
              After completion of development, we hand off the product to you.
              If it is a web app, it will be hosted on a publicly available url
              for all to use and see. If you or any of your users encounter any
              bugs, we are happy to fix them for you.
            </p>
          </div>
        </div>
        <div
          id="criteria"
          className="flex h-full w-full flex-col items-center space-y-2 border border-blue-700 lg:my-0"
        >
          <h1 className="text-center text-2xl font-bold">
            What kind of projects do we work on?
          </h1>
          <p>
            We work on a variety of web based applications. These can range from
            volunteer management systems to custom interactive map embeds. Some
            examples of tools to consider include:
          </p>
          <ul className="ml-10 list-disc">
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
            <a href="../our-work" className="text-blue-700">
              {" "}
              completed and current projects page{" "}
            </a>
            to see what types of applications we've built and are building. Our
            main focus is on software engineering and developer education, so
            our current offerings <strong>do not</strong> include:
          </p>
          <ul className="ml-10 list-disc">
            <li>
              <strong>Basic website design and development</strong>
              <br />
              We do not build websites that are purely content-based, suhc as
              Wordpress blogs or landing pages.
            </li>
            <li>
              <strong>Technology integration or consulting.</strong>
              <br />
              We do not set up or integrate existing solutions such as
              Salesforce or Drupal.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default JoinNonprofit;
