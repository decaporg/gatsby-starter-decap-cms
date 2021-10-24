import React from "react";
import PropTypes from "prop-types";
import AboutPage from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPage
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AboutPagePreview;
