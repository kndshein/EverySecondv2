import React, { useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import FlashingLinks from "../components/FlashingLinks";
import Background from "../components/Background";
import Nav from "../components/Nav";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Home({ data: { topics } }) {
  console.log(topics);
  const [backgroundId, setBackgroundId] = useState(null);
  return (
    <div className="homepage-container">
      <Nav isHome={true} />
      <div className="links-in-homepage-container">
        {topics.map((ele, idx) => {
          return (
            <React.Fragment key={ele.id}>
              <FlashingLinks topic={ele} setBackgroundId={setBackgroundId} />
              <div
                style={
                  backgroundId === ele.id ? { opacity: 1 } : { opacity: 0 }
                }
                className="background-container"
              >
                <Background
                  link={ele.slideOne.background.image}
                  alt={ele.slideOne.background.alt}
                  artist={ele.slideOne.background.artist}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div style={{ zIndex: "-2" }} className="background-container">
        <Background
          link="https://images.unsplash.com/photo-1508962914676-134849a727f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
          alt="Upclose picture of a watch"
          artist="@agebarros"
        />
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
