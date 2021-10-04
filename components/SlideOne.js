import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SlideOne({ content }) {
  var num = [],
    i = 0,
    len = 30;
  while (++i <= len) num.push(i);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: content.seconds,
        delayChildren: 2 + content.seconds / 2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 2.6, ease: "easeOut" },
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
            className="taglines-container-container"
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
            variants={container}
            initial="hidden"
            animate="show"
          >
            {num.map((x, index) => (
              <motion.div variants={item} key={index}>
                <FontAwesomeIcon icon={content.icon.split(" ")} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="background-image">
          <img
            src={`${content.background.image}`}
            alt={`${content.background.alt}`}
          />
        </div>
      </div>
    </div>
  );
}
