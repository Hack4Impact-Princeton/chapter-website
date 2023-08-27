export const Join = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-start space-y-3  ">
      <h1 className="my-1 text-5xl font-bold">Join Us</h1>
      <p className="text-lg">
        We're open to students and nonprofits of all backgrounds, no matter your
        project or technical expertise.
      </p>
      <div className="flex h-2/3 w-3/4 flex-col items-center justify-around  p-2 lg:flex-row">
        <div className="flex h-full w-3/4 flex-col items-center justify-around space-y-2   lg:w-2/5">
          <h3 className="text-2xl font-bold">Students</h3>
          <a href="/join/students">
            <img
              src="images/2025DeclarationDay_041423_2290.jpg"
              alt="Declaration Day Photo"
              className="cursor-pointer rounded-md shadow-md"
            />
          </a>
          <p>
            Are you passionate about software and Social Impact? Are you looking
            to join a unique and close-knit community? Join Us! Our mission
            provides a distinct experience to develop technical skills and
            interact with nonprofit clients all while applying your skills to
            impact real lives.
          </p>
          <a href="/join/students">
            <button className="w-24 rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700 hover:shadow-2xl">
              Join us!
            </button>
          </a>
        </div>
        <div className="my-5 flex h-full w-3/4 flex-col items-center justify-between space-y-2   lg:w-2/5">
          <h3 className=" text-2xl font-bold">Nonprofit Partners</h3>
          <a href="/join/nonprofit-partners">
            <img
              src="/images/2025DeclarationDay_041423_2290.jpg"
              alt="colored H4I logo"
              className="cursor-pointer rounded-md shadow-md"
            />
          </a>
          <p>
            Does your nonprofit lack the technical resources or know-how to
            create software solutions that you need? Looking to partner with an
            established and professional club of passionate and dedicated
            Princeton students? Feel free to reach out and join us!
          </p>
          <a href="/join/nonprofit-partners">
            <button className="rounded-md bg-green-500 p-2 text-white hover:bg-green-700 hover:shadow-2xl">
              Work with us!
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};
export default Join;
