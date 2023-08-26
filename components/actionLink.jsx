import React from "react";
import Link from "next/link";

const getAnchor = (link, text, style) => (
  <a
    className={"link"}
    style={{ color: "var(--primary-blue)", ...style }}
    href={link}
  >
    {text}
  </a>
);

const ActionLink = ({ link, text, style }) =>
  link.startsWith("/") ? (
    <Link href={link}>{getAnchor(link, text, style)}</Link>
  ) : (
    getAnchor(link, text, style)
  );

export default ActionLink;
