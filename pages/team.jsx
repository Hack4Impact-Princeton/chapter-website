import MemberIcon from "../components/teampage/MemberIcon";
import alpTeam, { execBoard } from "../utils/memberInfo";
const TestComponent = () => {
  return (
    <main className="flex h-full w-full flex-col items-center">
      <h1 className="m-10 text-5xl font-extrabold underline">Meet the Team</h1>
      <div
        id="execBoardDiv"
        className="m-5 flex flex-col items-center justify-center rounded-md border border-black"
      >
        <h1 className="my-2 text-xl font-extrabold underline">
          Executive Board
        </h1>
        <div
          id="execBoardMembersDiv"
          className="mx-1 grid h-fit w-full grid-cols-2 place-items-center gap-4 p-2 md:mx-2 md:grid-cols-4 lg:grid-cols-7"
        >
          {execBoard.map((member, index) => (
            <MemberIcon
              key={index}
              name={member.name}
              linkedin={member.linkedin}
              headshotSrc={member.headshotSrc}
              position={member.position}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between">
        <div
          id="teamsDiv"
          className="flex w-full flex-col  items-center justify-center md:flex-row"
        >
          <div
            id="alpDiv"
            className="mx-5 mb-5 flex w-full flex-col items-center justify-center rounded-md border border-black lg:ml-20 lg:w-5/6"
          >
            <h1 className="my-2 text-xl font-extrabold underline">
              African Library Project Team
            </h1>
            <div
              id="alpMembersDiv"
              className="mx-1 grid h-fit w-full grid-cols-2 place-items-center gap-4 bg-green-50 md:mx-2"
            >
              {alpTeam.map((member, index) => (
                <MemberIcon
                  key={index}
                  name={member.name}
                  linkedin={member.linkedin}
                  headshotSrc={member.headshotSrc}
                  position={member.position}
                />
              ))}
            </div>
          </div>
          <div
            id="njtreeDiv"
            className="mx-5 mb-5 flex w-full flex-col items-center justify-center rounded-md border border-black lg:mr-20 lg:w-5/6"
          >
            <h1 className="my-2 text-xl font-extrabold underline">
              NJ Tree Foundation Team
            </h1>
            <div
              id="njtreeMembersDiv"
              className="mx-1 grid h-fit w-full grid-cols-2 place-items-center gap-4 bg-blue-50 md:mx-2"
            >
              {alpTeam.map((member, index) => (
                <MemberIcon
                  key={index}
                  name={member.name}
                  linkedin={member.linkedin}
                  headshotSrc={member.headshotSrc}
                  position={member.position}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestComponent;
