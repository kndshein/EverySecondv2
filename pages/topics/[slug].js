import { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import SlideOne from "../../components/SlideOne";
import SlideTwo from "../../components/SlideTwo";
import SlideThree from "../../components/SlideThree";
import SlideFour from "../../components/SlideFour";
import useOnScreen from "../../utilities/useOnScreen";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Topic({ data: { topic } }) {
  console.log(topic);
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });
  return (
    <>
      <div className="slides-container">
        <SlideOne content={topic.slideOne} />
        <SlideTwo content={topic.slideTwo} />
        <SlideThree content={topic.slideThree} />
        <SlideFour content={topic.slideFour} setRefTopic={setRef} />
      </div>
    </>
  );
}

export const getStaticProps = async ({ params: { slug } }) => {
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

  return {
    paths: data.topics.map((topic) => ({ params: { slug: topic.slug } })),
    fallback: false,
  };
};
