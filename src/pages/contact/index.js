import React from 'react';
import { navigate } from 'gatsby';
import { Label, Input, Textarea, Button, Flex, Card, Heading } from 'theme-ui';
import { useLocalization } from 'gatsby-theme-i18n';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import {
  contact,
  name,
  email,
  message,
  submit,
} from '../../translations/contact.translation';

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
    const { locale } = this.props;
    return (
      <Flex
        as="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          as="form"
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <Heading sx={{ textTransform: 'capitalize' }}>
            {contact[locale]}{' '}
          </Heading>
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
              {name[locale]}
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
            <Label htmlFor="email">{email[locale]}</Label>
            <Input
              type="email"
              name="email"
              onChange={this.handleChange}
              id="email"
              required
            />
          </Flex>
          <Flex sx={{ flexDirection: 'column' }}>
            <Label htmlFor="message">{message[locale]}</Label>
            <Textarea
              name="message"
              onChange={this.handleChange}
              id="message"
              required
            />
          </Flex>
          <Flex>
            <Button type="submit">{submit[locale]}</Button>
          </Flex>
        </Card>
      </Flex>
    );
  }
}
/* eslint-disable jsx-a11y/label-has-associated-control */

const ContactPageWithLocalHook = () => {
  const { locale } = useLocalization();
  return (
    <Layout>
      <SEO title={contact[locale]} lang={locale} />
      <Index locale={locale} />
    </Layout>
  );
};
export default ContactPageWithLocalHook;
