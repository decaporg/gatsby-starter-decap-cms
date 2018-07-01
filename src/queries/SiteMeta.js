import { graphql } from 'gatsby';

export const siteMeta = graphql`
  fragment SiteMeta on RootQueryType {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
