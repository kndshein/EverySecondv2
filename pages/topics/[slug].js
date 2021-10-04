import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Topic() {
  return <div>Topic</div>;
}

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
