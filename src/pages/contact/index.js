import React from 'react';

import { navigate } from 'gatsby';
import { Box, Label, Input, Textarea, Button } from 'theme-ui';
import { useLocalization } from 'gatsby-theme-i18n';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

// TODO add localization
// TODO : add localization to this page and to thanks page

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  /* eslint-disable jsx-a11y/label-has-associated-control */
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <Box
                as="form"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <Input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <Label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </Label>
                </div>
                <div className="field">
                  <Label className="label" htmlFor="name">
                    Your name
                  </Label>
                  <div className="control">
                    <Input
                      className="input"
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      id="name"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <Label className="label" htmlFor="email">
                    Email
                  </Label>
                  <div className="control">
                    <Input
                      className="input"
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <Label className="label" htmlFor="message">
                    Message
                  </Label>
                  <div className="control">
                    <Textarea
                      className="textarea"
                      name="message"
                      onChange={this.handleChange}
                      id="message"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <Button type="submit">Send</Button>
                </div>
              </Box>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
/* eslint-disable jsx-a11y/label-has-associated-control */

const ContactPageWithLocalHook = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('Nav');
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO title={t('contact')} lang={locale} />
      <Index locale={locale} />
    </main>
  );
};
export default ContactPageWithLocalHook;
