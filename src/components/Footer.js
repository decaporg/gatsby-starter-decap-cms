import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="bio">
          <div className="logo">
            <img
              src="https://www.gravatar.com/avatar/7b1630c267230ec687dd7133d3a2e2b3?s=80"
              class="logo__img"
              alt="Adam Sanderson"
            ></img>
          </div>
          A front-end developer based out of Hastings, UK
        </div>
        <Link className="nav__link" to="/">
          Home
        </Link>
        <a
          href="https://github.com/adsanderson"
          className="nav__link"
          title="Github"
        >
          Github
        </a>
        <a
          href="https://twitter.com/lazydayed"
          className="nav__link"
          title="Twitter"
        >
          Twitter
        </a>
      </nav>
    );
  }
};

export default Footer;
