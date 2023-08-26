import { recruitmentTimeline } from "../../utils/recruitmentTimeline";
import Nav from "../../components/navbar";
const JoinStudent = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-start">
        <h1 className="my-8 text-5xl font-extrabold">Students</h1>
        <div
          id="roles"
          className="flex h-fit w-full flex-col items-center justify-center lg:mt-5 lg:flex-row"
        >
          <div
            id="dev"
            className="mx-5 flex h-fit w-3/4 flex-col items-center justify-around bg-green-50 px-16 py-8 lg:mx-10 lg:w-2/5"
          >
            <img
              src="/images/developer-icon2.svg"
              alt="Developer Icon"
              className="h-16"
            />
            <h3 className="text-xl font-bold">Developer</h3>
            <p>Application: Due TBD</p>
            <p>
              Developers will complete a 7-session bootcamp this fall to ensure
              that everyone is starting from an appropriate skill baseline. So
              underclassmen, don’t think inexperience should stop you from
              applying! The bootcamp will cover aspects of both front and
              back-end engineering with the MERN tech stack. Completion of the
              bootcamp means developers will be equipped to work on projects
              this spring.
            </p>
          </div>
          <div
            id="designer"
            className="mx-5 my-5 flex h-fit w-3/4 flex-col items-center justify-around bg-blue-50 px-16 py-8 lg:mx-10 lg:my-0 lg:w-2/5"
          >
            <img
              src="/images/designer.svg"
              alt="UI/UX Designer Icon"
              className="h-16"
            />
            <h3 className="text-xl font-bold">UI/UX Designer</h3>
            <p>Application: Due TBD</p>
            <p>
              UI/UX designers work with Product Managers (PM's) to determine the
              look and flow of an application. Starting with working from a PM’s
              Product Requirements Doc, designers will use Figma to make low,
              then high fidelity mock-ups of the application. During the spring
              semester, design work will be concentrated during the beginning of
              the semester, then decrease in workload after the midpoint.
            </p>
          </div>
        </div>
        <img
          src="/images/2025Declarationday_041423_2289.jpg"
          alt="Declaration Day Sophs"
          className="mt-8 h-80 rounded-md shadow-lg "
        />
        <div
          id="recruiting timeline"
          className="my-8 flex w-full flex-col items-center"
        >
          <h2 className="mb-5 text-2xl font-extrabold">
            Recruiting Timeline - Fall 2023
          </h2>
          <div className="mx-auto my-2 w-11/12 border-2 border-t border-black"></div>
          {recruitmentTimeline.map((item) => {
            return (
              <>
                <div className="flex w-full flex-row items-start justify-center">
                  <p className="mr-8 w-1/3 text-right text-lg font-bold">
                    {item.title}
                  </p>
                  <p className="w-3/5 text-left">{item.description}</p>
                </div>
                <div className="mx-auto my-2 w-11/12 border-2 border-t border-black"></div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};
export default JoinStudent;
