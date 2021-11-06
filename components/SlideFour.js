import { motion } from "framer-motion";
import useOnScreen from "../utilities/useOnScreen";
import Background from "./Background";
import Resource from "./Resource";

export default function SlideFour({ content, setRefTopic }) {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });

  const animation = {
    slideContainer: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0,
        },
      },
    },
    tagline: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1,
        },
      },
    },
    resources: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: 1.5,
          delayChildren: 2.5,
        },
      },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={animation.slideContainer}
        animate={visible ? "animate" : "initial"}
        className="slide-four-container"
        ref={setRefTopic}
      >
        <div className="resources-container">
          <motion.div
            variants={animation.tagline}
            animate={visible ? "animate" : "initial"}
            className="tagline"
            ref={setRef}
          >
            Get involved. Take action. Lend a hand.
          </motion.div>
          <motion.div
            variants={animation.resources}
            animate={visible ? "animate" : "initial"}
            className="resources"
          >
            <Resource
              title="Educate Yourself"
              id="educate"
              content={content.educates}
            />
            <Resource
              title="Spread Awareness"
              id="awareness"
              content={content.awarenesses}
            />
            <Resource
              title="Volunteer Your Time"
              id="volunteer"
              content={content.volunteers}
            />
            <Resource
              title="Help Financially"
              id="financial"
              content={content.financials}
            />
          </motion.div>
        </div>
        <Background
          link={content.background.image}
          alt={content.background.alt}
          artist={content.background.artist}
        />
      </motion.div>
    </div>
  );
}
