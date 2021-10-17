import { useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import LinkScroll from "../components/LinkScroll";
import Background from "../components/Background";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

const initialBackground = {
  link: "https://images.unsplash.com/photo-1508962914676-134849a727f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  alt: "Upclose picture of a watch",
  author: "@agebarros",
};

export default function Home({ data: { topics } }) {
  const [background, setBackground] = useState(initialBackground);
  console.log("topics", topics);
  return (
    <div className="homepage-container">
      <div className="logo-container">Every Second</div>
      <LinkScroll
        topics={topics}
        setBackground={setBackground}
        initialBackground={initialBackground}
      />
      <div className="background-container">
        <Background link={background.link} alt={background.alt} />
      </div>
    </div>
  );
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
          seconds
          tagline
        }
        id
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
