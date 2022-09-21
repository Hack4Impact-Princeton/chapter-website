import React from 'react';

/* cold pastel blue background */
const getBackground = (lightblue) => {
  if (lightblue) {
    return 'rgb(242, 248, 255)';
  }
  return undefined;
};

const Section = ({ children, lightblue }) => (
  <section
    className="typical-section"
    style={{
      background: getBackground(lightblue),
      paddingTop: "75px",
      paddingBottom: "30px"
    }}>
    <div>
      {children}
      <style jsx>
        {`
          @media (max-width: 768px) {
            section {
              padding: 300px 0;
              height: 600px;
            }
          }
          .typical-section {
            padding: 100px 100px;
            margin: auto;
          }
        `}
      </style>
    </div>
  </section>
);

export default Section;
// rgb(250, 251, 252) !important