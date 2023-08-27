import Link from 'next/link';

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
        .link {
          color: black;
          font-size: 48px;
          margin-bottom: 15px;
        }
        .link:hover {
          color: var(--accent-orange);
        }
      `}</style>

    </>
  );
}

export default NavLink;
