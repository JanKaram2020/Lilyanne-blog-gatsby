import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Layout from '../components/Layout';
// TODO add seo to all pages

const CategoriesPage = ({ data }) => {
  const categories = data.allSanityCategory.nodes;
  console.log(categories);
  const { locale } = useLocalization();
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        {categories.map((category) => (
          <div key={category.slug.current}>
            <h1> {category.title.en}</h1>
          </div>
        ))}
      </Layout>
    </main>
  );
};

export default CategoriesPage;
export const query = graphql`
  query MyQuery {
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
      }
    }
  }
`;
