import Link from "next/link";
import { motion } from "framer-motion";

export default function LinkScroll({
  topics,
  setBackground,
  initialBackground,
}) {
  const handleBackgroundHover = (backgroundURL) => {
    backgroundURL
      ? setBackground({ link: backgroundURL.image, alt: backgroundURL.alt })
      : setBackground(initialBackground);
  };
  return (
    <div className="links-container">
      {topics.map((ele, idx) => {
        return (
          <Link href={`/topics/${ele.slug}`} key={ele.id}>
            <motion.a
              className="link"
              onMouseEnter={() =>
                handleBackgroundHover(ele.slideOne.background)
              }
              onMouseLeave={() => handleBackgroundHover()}
              animate={{ opacity: [1, 0] }}
              transition={{
                repeat: Infinity,
                duration: ele.slideOne.seconds,
                repeatType: "reverse",
              }}
              ease={{ ease: "easeInOut" }}
              whileHover={{ opacity: [1, 1] }}
            >
              {ele.slideOne.tagline}
            </motion.a>
          </Link>
        );
      })}
    </div>
  );
}
