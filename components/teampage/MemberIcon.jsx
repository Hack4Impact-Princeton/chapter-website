const MemberIcon = (props) => {
  const name = props.name;
  const headshot = props.headshotSrc;
  const linkedin = props.linkedin;
  const position = props.position;
  return (
    <div className=" m-1 flex h-60 w-40 flex-col items-center justify-around rounded-lg bg-white p-3 sm:shrink-0">
      <img src={headshot} alt={`${name}'s profile picture`} className="h-10" />
      <p className="text-xs">{name}</p>
      <p className="text-center text-xs">{position}</p>
      <a href={linkedin} className="cursor-pointer font-extrabold">
        in
      </a>
    </div>
  );
};

export default MemberIcon;
