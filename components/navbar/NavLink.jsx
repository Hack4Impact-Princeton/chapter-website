import Link from "next/link";

function NavLink({ children, href, activeRoute, ariaLabel }) {
  return (
    <>
      <Link href={href}>
        <a style={{ marginLeft: "30px" }} aria-label={ariaLabel} className={`link ${href === activeRoute ? 'active_route' : ''}`}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        .active_route {
          color: var(--accent-black);
          font-weight: bold;
        }

        .inactive {
            font-size: 50px;
        }
      `}</style>

    </>
  );
}

export default NavLink;
