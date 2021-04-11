import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { jsx, NavLink } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const CategoriesPage = ({ data }) => {
  const categories = data.allSanityCategory.nodes;
  console.log(categories);
  const { locale } = useLocalization();
  const { t } = useTranslation('Nav');
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO title={t('categories')} lang={locale} />
      <Layout>
        {categories.map((category) => (
          <div key={category.slug.current}>
            <h1> {category.title[locale]}</h1>
          </div>
        ))}
      </Layout>
    </main>
  );
};

export default CategoriesPage;
export const query = graphql`
  query CategoryQuery {
    allSanityCategory {
      nodes {
        title {
          ar
          en
          fr
        }
        slug {
          current
        }
        description {
          ar
          en
          fr
        }
      }
    }
  }
`;
