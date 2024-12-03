import { graphqlHomeQuery } from "@/graphQLQuery";
import { gql } from "@apollo/client";

export const getPostBySlug = ({ slug }: { slug: string }) => {
  return gql`
    query graphqlPostQuery {
      postBy(slug: "${slug}") {
        title
        date
        content
        postId
        slug
        categories {
          nodes {
            categoryId
          }
        }
      }
    }
  `;
};

export const GET_POST_BY_SLUG = gql`
  query graphqlPostQuery {
    postBy(slug: "cac-ky-thuat-thi-cong-xay-dung-ma-ky-su-can-nam-ro") {
      title
      date
      content
      postId
      slug
      categories {
        nodes {
          categoryId
        }
      }
    }
  }
`;

export const GET_PAGE_CMS = gql`
  ${graphqlHomeQuery}
`;
