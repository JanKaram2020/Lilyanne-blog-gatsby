import React from 'react';
import { navigate } from 'gatsby';
import { Label, Input, Textarea, Button, Flex, Heading } from 'theme-ui';
import { useLocalization } from 'gatsby-theme-i18n';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';

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
        <section>
          <Heading py="10px">{this.props.t('contact')} </Heading>
          <Flex
            as="form"
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            sx={{
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <Input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <Label>
                Don’t fill this out:
                <input name="bot-field" onChange={this.handleChange} />
              </Label>
            </div>
            <Flex sx={{ flexDirection: 'column' }}>
              <Label className="label" htmlFor="name">
                {this.props.t('name')}
              </Label>
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                id="name"
                required
              />
            </Flex>
            <Flex sx={{ flexDirection: 'column' }}>
              <Label htmlFor="email">{this.props.t('email')}</Label>
              <Input
                type="email"
                name="email"
                onChange={this.handleChange}
                id="email"
                required
              />
            </Flex>
            <Flex sx={{ flexDirection: 'column' }}>
              <Label htmlFor="message">{this.props.t('message')}</Label>
              <Textarea
                name="message"
                onChange={this.handleChange}
                id="message"
                required
              />
            </Flex>
            <Flex>
              <Button type="submit">{this.props.t('submit')}</Button>
            </Flex>
          </Flex>
        </section>
      </Layout>
    );
  }
}
/* eslint-disable jsx-a11y/label-has-associated-control */

const ContactPageWithLocalHook = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('Contact');
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO title={t('contact')} lang={locale} />
      <Index locale={locale} t={t} />
    </main>
  );
};
export default ContactPageWithLocalHook;
