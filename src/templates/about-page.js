import React from 'react';

export default ({ data }) => (
  <section className="section section--gradient">
    {console.log(data)}
    <div className="container">
      <div className="columns">
        <div className="column is-7">
          <div className="section">
            <h2 className="title is-size-3 has-text-primary is-bold-light">A Dance With Dragons</h2>
            <div className="content is-serif">
              <p>
                The Dothraki do things in their own time, for their own reasons. Fire and blood. When you play the game
                of thrones, you win or you die. The Dothraki do things in their own time, for their own reasons. What is
                dead may never die.
              </p>
              <p>
                Bastards are born of passion, aren't they? We don't despise them in Dorne. When you play the game of
                thrones, you win or you die. More pigeon pie, please. More pigeon pie, please. A forked purple lightning
                bolt, on black field speckled with four-pointed stars. The Knight of Lemonwood.
              </p>
              <p>
                I pledge my life and honor to the Night's Watch, for this night and all the nights to come. The War of
                the 5 kings. I would like a trial by combat.
              </p>
              <p>
                A Lannister always pays his debts. King in the North. As High as Honor. Dunc the Lunk, thick as a castle
                wall. I would like a trial by combat. The night is dark and full of terrors. You know nothing, Jon Snow.
                Bastards are born of passion, aren't they? We don't despise them in Dorne.
              </p>
              <p>
                When you play the game of thrones, you win or you die. It's ten thousand miles between Kings landing and
                the wall. The battle of the redgrass field. When you play the game of thrones, you win or you die. The
                battle of the redgrass field. May the Father judge him justly.
              </p>
              <p>
                The battle of the redgrass field. A good act does not wash out the bad, nor a bad act the good. Each
                should have its own reward. Unbowed, Unbent, Unbroken. The tourney of Ashford Meadows. The battle of the
                redgrass field. I would like a trial by combat. More pigeon pie, please. The Dothraki do things in their
                own time, for their own reasons. When you play the game of thrones, you win or you die. The wolf and the
                lion. The War of the 5 kings. King in the North. It is rare to meet a Lannister who shares my enthusiasm
                for dead Lannisters. Unbowed, Unbent, Unbroken. The battle of the redgrass field.
              </p>
            </div>
          </div>
        </div>
        <div className="column is-5" />
      </div>
    </div>
  </section>
);

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        aboutData {
          paragraph
        }
      }
    }
  }
`;
