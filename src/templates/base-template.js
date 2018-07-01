import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const getSchemaOrgJSONLD = ({
  site,
  isBlog,
  url,
  title,
  image,
  description,
  datePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: site.title,
    },
  ];

  return isBlog
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: site.title,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Jason Lengstorf',
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://lengstorf.com',
            logo: site.logo,
            name: 'Jason Lengstorf',
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': site.url,
          },
          datePublished,
        },
      ]
    : schemaOrgJSONLD;
};

const getUrl = ({ pathname }) => pathname;

const BaseTemplate = (props) => {
  const { isBlog } = props;
  const {
    site,
    markdownRemark: {
      frontmatter: {
        title,
        description,
        image,
        datePublished,
      },
    },
  } = props.data;
  console.log(site);
  const url = getUrl(props.location);

  return (
    <Fragment>
      <Helmet
          titleTemplate={`%s | ${site.title}`}
          defaultTitle={site.title}
          onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
      >
          <html lang="en" amp />
          <body className="root" />
          <title itemProp="name" lang="en">My Plain Title or {`dynamic`} title</title>
          <base target="_blank" href="http://mysite.com/" />

          {/* OpenGraph tags */}
          <meta property="og:url" content={url} />
          {isBlog ? <meta property="og:type" content="article" /> : null}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          {/*<meta property="fb:app_id" content={site.fbAppID} />*/}

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={site.twitter} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />

          {/* multiple meta elements */}
          <meta name="description" content={description} />
          <meta name="title" content={title} />

          <link rel="canonical" href="http://mysite.com/example" />
          <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" />
          {/*
            {locales.map((locale) => {
                <link rel="alternate" href="http://example.com/{locale}" hrefLang={locale} />
            })}
          */}
          {/* inline script elements */}
          <script type="application/ld+json">{JSON.stringify(getSchemaOrgJSONLD({
            site,
            isBlog,
            url,
            title,
            image,
            description,
            datePublished,
          }))}</script>
      </Helmet>
      {props.children}
    </Fragment>
  )
};

BaseTemplate.defaultProps = {
  isBlog: false,
};

BaseTemplate.propTypes = {
  data: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  isBlog: PropTypes.bool,
};

export default withRouter(BaseTemplate);
