import { motion } from "framer-motion";
import useOnScreen from "../utilities/useOnScreen";
import Background from "./Background";
import Footer from "./Footer";

export default function SlideThree({ content, citations }) {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 }, true);

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
    taglineOne: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 1,
        },
      },
    },
    taglineTwo: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: 2,
          delay: 3,
        },
      },
    },
    taglineTwoFocus: {
      initial: { color: "#ffffff" },
      animate: {
        color: content.hexColor.hex,
        transition: {
          duration: 2,
          delay: 4.5,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={animation.slideContainer}
        animate={visible ? "animate" : "initial"}
        className="slide-three-container"
        ref={setRef}
      >
        <div className="taglines-container">
          <motion.div
            variants={animation.taglineOne}
            animate={visible ? "animate" : "initial"}
            className="tagline"
          >
            {content.taglineOne}
          </motion.div>
          <motion.div
            variants={animation.taglineTwo}
            animate={visible ? "animate" : "initial"}
            className="tagline-2"
          >
            {content.taglineTwo}{" "}
            <motion.span
              variants={animation.taglineTwoFocus}
              animate={visible ? "animate" : "initial"}
            >
              {content.taglineTwoFocus}
            </motion.span>
          </motion.div>
        </div>
        <Footer citations={citations} slideNum={3} />
        <Background
          link={content.background.image}
          alt={content.background.alt}
          artist={content.background.artist}
        />
      </motion.div>
    </div>
  );
}
