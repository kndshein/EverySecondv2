import { GraphQLClient, gql } from "graphql-request";
import Nav from "../../components/Nav";
import SlideOne from "../../components/SlideOne";
import SlideTwo from "../../components/SlideTwo";
import SlideThree from "../../components/SlideThree";
import SlideFour from "../../components/SlideFour";
import ScrollBar from "../../components/ScrollBar";
import useOnScreen from "../../utilities/useOnScreen";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL);

export default function Topic({ data: { topic }, dataTwo: { topics } }) {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });
  return (
    <>
      <Nav
        isHome={false}
        title={topic.title}
        slug={topic.slug}
        slugs={topics}
      />
      <div className="slides-container">
        <SlideOne content={topic.slideOne} citations={topic.citations} />
        <SlideTwo content={topic.slideTwo} citations={topic.citations} />
        <SlideThree content={topic.slideThree} citations={topic.citations} />
        <SlideFour content={topic.slideFour} setRefTopic={setRef} />
      </div>
      <ScrollBar visible={visible} />
    </>
  );
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = gql`
    query Topic($slug: String!) {
      topic(where: { slug: $slug }) {
        title
        slug
        slideOne {
          seconds
          tagline
          icon
          background {
            image
            alt
            artist
          }
        }
        slideTwo {
          taglineOne
          taglineTwo
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
          taglineTwo
          taglineTwoFocus
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
        citations {
          slideNum
          link
          label
          id
        }
      }
    }
  `;

  const queryTwo = gql`
    query Topics {
      topics {
        slug
      }
    }
  `;

  const data = await client.request(query, { slug });
  const dataTwo = await client.request(queryTwo);

  if (!data.topic || !dataTwo.topics) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, dataTwo },
  };
};

export const getStaticPaths = async () => {
  const query = gql`
    query TopicsSlugs {
      topics {
        id
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
