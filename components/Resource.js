import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resource({ title, id, content }) {
  const animation = {
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
    <motion.div variants={animation} className="resource">
      <div className="title" id={id}>
        {title}
      </div>
      <ul>
        {content.map((ele, index) => {
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
  );
}
