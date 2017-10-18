import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import github from '../img/github-icon.svg';
import 'bulma';

const Navbar = () => (
  <nav className="navbar is-light">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        Gatsby powered by Netlify CMS
      </Link>
      <a className="navbar-item" href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate" target="_blank">
        <span className="icon">
          <img src={github} alt="Github" />
        </span>
      </a>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
