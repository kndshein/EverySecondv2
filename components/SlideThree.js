import { motion } from "framer-motion";
import useOnScreen from "../utilities/useOnScreen";

export default function SlideThree({ content }) {
  // console.log(content);
  const [setRef, visible] = useOnScreen({ threshold: 0.5 }, true);

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0,
      },
    },
  };

  const taglineOneVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };

  const taglineTwoVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 3,
      },
    },
  };

  const spanVariants = {
    initial: { color: "#ffffff" },
    animate: {
      color: content.hexColor.hex,
      transition: {
        duration: 2,
        delay: 4.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={variants}
        animate={visible ? "animate" : "initial"}
        className="slide-three-container"
        ref={setRef}
      >
        <div className="taglines-container">
          <motion.div
            variants={taglineOneVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline"
          >
            {content.taglineOne}
          </motion.div>
          <motion.div
            variants={taglineTwoVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline-2"
          >
            {content.taglineTwo}{" "}
            <motion.span
              variants={spanVariants}
              animate={visible ? "animate" : "initial"}
            >
              {content.taglineTwoFocus}
            </motion.span>
          </motion.div>
        </div>
        <div className="background-image">
          <img
            src={`${content.background.image}`}
            alt={`${content.background.alt}`}
          />
        </div>
      </motion.div>
    </div>
  );
}
