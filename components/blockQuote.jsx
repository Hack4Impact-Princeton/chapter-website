import React from "react";

const BlockQuote = ({ text, style }) => (
  <div>
    <p
      className="blockquote-fancy"
      style={{
        ...style,
      }}
    >
      {text}
    </p>
    <p className="blockquote-fancy-cite text-right">
      - Bernardo H. Motta, Ph.D.
    </p>
    <p className="blockquote-fancy-title text-right">
      Faculty Coordinator of the USFSP Neighborhood News Bureau
    </p>
  </div>
);

export default BlockQuote;
