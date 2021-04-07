import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

const ThanksPage = () => (
  <Layout>
    <SEO />
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Layout>
);
export default ThanksPage;
