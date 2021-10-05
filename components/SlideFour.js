import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useOnScreen from "../utilities/useOnScreen";

export default function SlideFour({ content, setRefTopic }) {
  console.log(content);
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });

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

  const taglineVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };

  const resourcesVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
        delayChildren: 2.5,
      },
    },
  };

  const resourcesVariantsChild = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={variants}
        animate={visible ? "animate" : "initial"}
        className="slide-four-container"
        ref={setRefTopic}
      >
        <div className="resources-container">
          <motion.div
            variants={taglineVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline"
            ref={setRef}
          >
            get involved. take action. lend a hand.
          </motion.div>
          <motion.div
            variants={resourcesVariants}
            animate={visible ? "animate" : "initial"}
            className="resources"
          >
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="educate">
                Educate Yourself
              </div>
              <ul>
                {content.educates.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name}{" "}
                        <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="awareness">
                Spread Awareness
              </div>
              <ul>
                {content.awarenesses.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name}{" "}
                        <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="volunteer">
                Volunteer Your Time
              </div>
              <ul>
                {content.volunteers.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name}{" "}
                        <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="financial">
                Help Financially
              </div>
              <ul>
                {content.financials.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name}{" "}
                        <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
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
