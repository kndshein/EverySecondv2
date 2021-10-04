import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Topic({ data: { topic } }) {
  console.log(topic);
  return <div>Topic</div>;
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;

  const query = gql`
    query Topic($slug: String!) {
      topic(where: { slug: $slug }) {
        slideOne {
          seconds
          tagline
          taglineCitation
          icon
          background {
            image
            alt
            artist
          }
        }
        slideTwo {
          taglineOne
          taglineOneCitation
          taglineTwo
          taglineTwoCitation
          icon
          highlightNum
          totalNum
          background {
            image
            alt
            artist
          }
        }
        slideThree {
          taglineOne
          taglineOneCitation
          taglineTwo
          taglineTwoFocus
          taglineTwoCitation
          hexColor {
            hex
          }
          background {
            image
            alt
            artist
          }
        }
        slideFour {
          educates {
            name
            link
          }
          awarenesses {
            name
            link
          }
          volunteers {
            name
            link
          }
          financials {
            name
            link
          }
          background {
            image
            alt
            artist
          }
        }
      }
    }
  `;

  const data = await client.request(query, { slug });

  console.log(data);

  if (!data.topic) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const query = gql`
    query TopicsSlugs {
      topics {
        slug
      }
    }
  `;

  const data = await client.request(query);
  console.log(data);

  return {
    paths: data.topics.map((topic) => ({ params: { slug: topic.slug } })),
    fallback: false,
  };
};
