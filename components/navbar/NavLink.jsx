import Link from 'next/link';

function NavLink({ children, href, activeRoute, ariaLabel }) {
  return (
    <>
      <Link href={href}>
        <a aria-label={ariaLabel} className={href === activeRoute ? 'active_route' : 'inactive'}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        .active_route {
          color: var(--accent-orange);
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