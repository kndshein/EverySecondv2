import Link from "next/link";
import { motion } from "framer-motion";

export default function FlashingLinks({ topic, setBackgroundId }) {
  const handleBackgroundHover = (id) => {
    id ? setBackgroundId(id) : setBackgroundId(null);
  };

  return (
    <div className="links-container">
      <Link href={`/topics/${topic.slug}`} key={topic.id}>
        <motion.a
          className="link"
          onMouseEnter={() => handleBackgroundHover(topic.id)}
          onMouseLeave={() => handleBackgroundHover()}
          animate={{ opacity: [1, 0] }}
          transition={{
            repeat: Infinity,
            duration: topic.slideOne.seconds,
            repeatType: "reverse",
          }}
          ease={{ ease: "easeInOut" }}
          whileHover={{ opacity: [1, 1] }}
        >
          {topic.slideOne.tagline}
        </motion.a>
      </Link>
    </div>
  );
}
