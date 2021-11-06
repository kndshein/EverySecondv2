import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useOnScreen from "../utilities/useOnScreen";
import Background from "./Background";
import Footer from "./Footer";

export default function SlideTwo({ content, citations }) {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 }, true);
  const [resizer, setResizer] = useState({ vw: 0, px: 0 });

  useEffect(() => {
    setResizer({
      vw: Math.round(29.863 * Math.pow(content.totalNum, -0.479) * 10) / 10,
      px: Math.round(298.68 * Math.pow(content.totalNum, -0.479) * 10) / 10,
    });
  }, [content.totalNum]);

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
    taglineOneVariants: {
      initial: { opacity: 0, y: 50 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          delay: 1,
        },
      },
    },
    taglineTwoVariants: {
      initial: { opacity: 0, y: 50 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
          delay: 3,
        },
      },
    },
    iconsContainer: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          staggerChildren: 0.002,
          delayChildren: 5,
          ease: "easeOut",
        },
      },
    },
    icon: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
      },
    },
    iconFocus: {
      initial: { opacity: 0, x: -50 },
      animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 3, delay: 5, ease: "easeOut" },
      },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={animation.slideContainer}
        animate={visible ? "animate" : "initial"}
        className="slide-two-container"
        ref={setRef}
      >
        <div className="taglines-container">
          <motion.div
            variants={animation.taglineOneVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline"
          >
            {content.taglineOne}
          </motion.div>
          <motion.div
            variants={animation.taglineTwoVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline-2"
          >
            {content.taglineTwo}
          </motion.div>
        </div>
        <motion.div
          variants={animation.iconsContainer}
          initial="initial"
          animate={visible ? "animate" : "initial"}
          className="icons-container"
        >
          {[...new Array(content.totalNum).fill(1)].map((_, index) => {
            return (
              <motion.div
                variants={
                  index < content.highlightNum
                    ? animation.iconFocus
                    : animation.icon
                }
                className="icon-container"
                style={{ width: `calc(max(${resizer.vw}vw,${resizer.px}px))` }}
                key={index}
              >
                <FontAwesomeIcon
                  className={`icon ${
                    index < content.highlightNum ? "focus" : ""
                  }`}
                  icon={content.icon.split(" ")}
                />
              </motion.div>
            );
          })}
        </motion.div>
        <Footer citations={citations} slideNum={2} />
        <Background
          link={content.background.image}
          alt={content.background.alt}
          artist={content.background.artist}
        />
      </motion.div>
    </div>
  );
}
