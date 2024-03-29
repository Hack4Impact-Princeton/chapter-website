import Link from 'next/link';

function Logo() {
  return (
    <>
      <Link href="/">
        {/* FIX: logo should not be hard coded */}
        <a className="image-container" aria-label="Go to homepage">
          <img
            className="university-logo"
            height="40"
            src="/images/Princeton_seal.svg.png"
            alt="pton seal"
          />
          <img
            className="hack4impact-logo"
            height="40"
            src="/images/logo.svg"
            alt="Hack4Impact logo"
          />
        </a>
      </Link>
      <style jsx>{`
        .image-container {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 !important;
          margin-right: auto;
        }
          img {
            max-height: 100%;
          }

          .university-logo {
            border-right: 1px solid #666;
            padding-right: 15px;
            margin-right: 15px;
          }

          @media (max-width: 420px) {
            height: 32px;

            .university-logo {
              padding-right: 10px;
              margin-right: 10px;
            }
          }
      `}</style>
    </>
  );
}

export default Logo;
