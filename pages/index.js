import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Home({ data: { topics } }) {
  console.log("topics", topics);
  return <div>Home</div>;
}

export const getStaticProps = async () => {
  const query = gql`
    query Topics {
      topics {
        title
        slug
        slideOne {
          background {
            image
            alt
            artist
          }
        }
      }
    }
  `;

  const data = await client.request(query);

  if (!data.topics) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
