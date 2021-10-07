import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "./Background";

export default function SlideOne({ content }) {
  const animation = {
    iconContainer: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: content.seconds,
          delayChildren: 2.2 + content.seconds / 2,
        },
      },
    },
    icon: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 2.6, ease: "easeOut" },
      },
    },
  };

  return (
    <div className="slides">
      <div className="slide-one-container">
        <motion.div
          className="taglines-container"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="taglines"
            initial={{ y: 50 }}
            animate={{ y: -25 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="tagline">
              every{" "}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: content.seconds / 2,
                  yoyo: Infinity,
                  delay: 2,
                }}
                ease={{ ease: "easeInOut" }}
              >
                {content.seconds}
              </motion.span>{" "}
              {content.seconds > 1 ? "seconds," : "second,"}
            </div>
            <div className="tagline-2">{content.tagline}</div>
          </motion.div>
          <motion.div
            className="icons-container"
            variants={animation.iconContainer}
            initial="hidden"
            animate="show"
          >
            {[...new Array(30).fill(1)].map((_, index) => (
              <motion.div variants={animation.icon} key={index}>
                <FontAwesomeIcon
                  className="icon"
                  icon={content.icon.split(" ")}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <Background
          link={content.background.image}
          alt={content.background.alt}
        />
      </div>
    </div>
  );
}
