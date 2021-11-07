import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer({ citations, slideNum }) {
  console.log(citations);
  const [citationsOpen, setCitationsOpen] = useState(false);
  const [relevantCitations, setRelevantCitations] = useState([]);

  const animation = {
    citationsContainer: {
      open: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
      closed: {
        opacity: 0,
      },
    },
    citation: {
      open: {
        opacity: 1,
      },
      closed: {
        opacity: 0,
      },
    },
  };

  useEffect(() => {
    setRelevantCitations(
      citations.filter((citation) => citation.slideNum.includes(slideNum))
    );
  }, [citations]);

  return (
    <>
      <motion.div
        className="footer-container"
        animate={
          citationsOpen
            ? {
                backgroundColor: "rgba(0,0,0,1)",
                height: "auto",
                zIndex: 15,
                transition: { duration: 0.3 },
              }
            : { backgroundColor: "rgba(0,0,0,0)", height: 63, zIndex: 10 }
        }
      >
        <a
          className={`citation-button ${citationsOpen ? "open" : ""}`}
          title="Show Sources"
          onClick={() => setCitationsOpen((citationsOpen) => !citationsOpen)}
        >
          Sources
        </a>
        <AnimatePresence>
          {citationsOpen && (
            <motion.div
              className="citations-container"
              initial={"closed"}
              animate={"open"}
              exit={"closed"}
              variants={animation.citationsContainer}
            >
              <FontAwesomeIcon
                role="button"
                title="Close Panel"
                className="close-button"
                icon={["fas", "times"]}
                onClick={() => setCitationsOpen(false)}
              />
              {relevantCitations.map((ele, idx) => {
                return (
                  <motion.a
                    key={ele.id}
                    href={ele.link}
                    className="citation"
                    target="_blank"
                    rel="noreferrer"
                    variants={animation.citation}
                    exit={{ opacity: 0 }}
                  >
                    {ele.label}
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
