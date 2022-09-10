import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a className="repo" href="!#">
        Repositories
      </a>
      <a href="!#">© {new Date().getFullYear()} Copyright Text</a>
    </div>
  );
}

export default Footer;
