import React from 'react';

import { AboutPageTemplate } from '../../src/templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate title={entry.getIn(['data', 'title'])} content={widgetFor('body')} />
);

export default AboutPagePreview;
