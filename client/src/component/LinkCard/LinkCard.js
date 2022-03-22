import React from "react";

export default function LinkCard({ link }) {
  return (
    <>
      <h2>Link</h2>
      <p>
        Your link:{" "}
        <a href={link.to} tarhet="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        From:{" "}
        <a href={link.from} rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Number of clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Create data:{" "}
        <strong>{new Date(link.createdAt).toLocaleDateString()}</strong>
      </p>
    </>
  );
}
