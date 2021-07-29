import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

import Logo from "../../imgs/Swoosh_Green.png";
import Socials from "../Socials/Socials";

function Footer() {
  return (
    <div className="Footer">
      <div className="logo_etc">
        <Link to="/">
          <div className="full_logo">
            <img src={Logo} alt="Tellor logo" />
            <h1>tellor</h1>
          </div>
        </Link>
        <p>&copy; 2020 tellor.io</p>
        <Socials />
      </div>
      <div className="flexer"></div>
      <div className="links">
        <p>Links</p>
        <a href="/jobs" alt="Tellor jobs">
          Jobs at tellor
        </a>
        <a
          href="http://docs.tellor.io"
          alt="http://docs.tellor.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.tellor.io
        </a>
        <a
          href="https://docs.tellor.io/whitepaper/introduction"
          alt="https://docs.tellor.io/whitepaper/introduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs.tellor.io/whitepaper
        </a>
        <a
          href="https://disputes.tellorscan.com/"
          alt="https://disputes.tellorscan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          disputes.tellorscan.com
        </a>
        <a
          href="https://prices.tellorscan.com/"
          alt="https://prices.tellorscan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          prices.tellorscan.com
        </a>
        <a
          href="https://github.com/tellor-io"
          alt="https://github.com/tellor-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/tellor-io
        </a>
      </div>
    </div>
  );
}

export default Footer;
