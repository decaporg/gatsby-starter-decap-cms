import React from "react";
import Link from "gatsby-link";
import Layout from '../../components/Layout'

export default class Examples extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <h1>Hi people</h1>
            <p>
              This is an example site integrating Netlify’s form handling with Gatsby
            </p>
            <ul>
              <li><Link to="/contact">Basic contact form</Link></li>
              <li><Link to="/contact/file-upload/">Form with file upload</Link></li>
              <li><Link to="/contact/recaptcha">Form with recaptcha</Link></li>
            </ul>

              <h2>reCaptcha</h2>
              <p>This example site uses <a href="https://github.com/dozoisch/react-google-recaptcha">react-google-recaptcha</a> to render the reCAPTCHA widget.</p>
              <p>To make the reCAPTCHA example work in your own copy of this site, you’ll need to do the following:</p>
              <ol>
                <li><a href="http://www.google.com/recaptcha/admin" rel="nofollow">Sign up for a reCAPTCHA API key pair</a> for your site.</li>
                <li><a href="https://app.netlify.com" rel="nofollow">Log in to your Netlify account</a>, and add the following
                environment variables to your site’s Settings &gt; Build &amp; deploy &gt; Build environment variables:</li>
              </ol>
              <ul>
                <li><code>SITE_RECAPTCHA_KEY</code> with your reCAPTCHA site key.</li>
                <li><code>SITE_RECAPTCHA_SECRET</code> with your reCAPTCHA secret key.</li>
              </ul>
              <p><strong>Important</strong>: the environment variables need to be called <code>SITE_RECAPTCHA_KEY</code> and <code>SITE_RECAPTCHA_SECRET</code> for the Netlify backend to find them. If you add a <code>GATSBY_</code> prefix to the variable names, the Netlify backend won't recognize them, the reCAPTCHA verification will fail, and your form submissions won't be stored.</p>
              <ol start="3">
                <li>Change the build command for your site to</li>
              </ol>
              <pre><code>echo SITE_RECAPTCHA_KEY=$SITE_RECAPTCHA_KEY &gt;&gt; env.production &amp;&amp; gatsby build
              </code></pre>
              <p>This will make the SITE_RECAPTCHA_KEY available to the Gatsby build in production.</p>
              <p>To see the reCAPTCHA widget locally, add <code>SITE_RECAPTCHA_KEY=your-reCAPTCHA-API-site-key</code>
              to your local <a href="https://www.gatsbyjs.org/docs/environment-variables/" rel="nofollow">.env.development</a> file.</p>
              <h2>Troubleshooting</h2>
              <h3>Forms stop working after upgrading to Gatsby v2</h3>
              <p>This can be caused by the offline-plugin. <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">Workaround</a> is to use <code>?no-cache=1</code> in the POST url to prevent the service worker from handling form submissions (Thanks to <a href="https://twitter.com/phmu_office/status/1047810173417472000" rel="nofollow">@phmu_office</a> for the heads up ✨)</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}