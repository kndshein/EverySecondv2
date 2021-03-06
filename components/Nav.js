import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav({ isHome, title, slug, slugs }) {
  const [navButtonLinks, setNavButtonLinks] = useState({});

  useEffect(() => {
    if (!isHome) {
      const currentSlugIdx = slugs.findIndex((ele) => ele.slug === slug);
      const slugExcludedSlugs = slugs.filter((ele) => ele.slug !== slug);
      const randomSlug =
        slugExcludedSlugs[Math.floor(Math.random() * slugExcludedSlugs.length)]
          .slug;
      const prevSlug =
        currentSlugIdx === 0 ? null : slugs[currentSlugIdx - 1].slug;
      const nextSlug =
        currentSlugIdx === slugs.length - 1
          ? null
          : slugs[currentSlugIdx + 1].slug;
      setNavButtonLinks({
        randomSlug: randomSlug,
        prevSlug: prevSlug,
        nextSlug: nextSlug,
      });
    } else {
      const randomSlug = slugs[Math.floor(Math.random() * slugs.length)].slug;
      setNavButtonLinks({ randomSlug: randomSlug });
    }
  }, [slug, slugs, isHome]);

  return (
    <div className="nav-bar-container">
      {!isHome && (
        <a href={navButtonLinks.prevSlug ? `${navButtonLinks.prevSlug}` : ""}>
          <FontAwesomeIcon
            className={`icon-button arrow-left ${
              navButtonLinks.prevSlug ? "" : "none"
            }`}
            icon={["fas", "chevron-left"]}
            title="Go to Previous Topic"
          />
        </a>
      )}
      <div className="logo-container">
        <Link href="/">
          <a
            className={`logo ${isHome ? "isHome" : ""}`}
            title="Every Second Home Page"
          >
            Every Second
          </a>
        </Link>
        {!isHome && (
          <>
            <FontAwesomeIcon className="divider" icon={["fas", "circle"]} />
            <div className="logo-tagline">{title}</div>
          </>
        )}
      </div>
      <a
        href={
          isHome
            ? `/topics/${navButtonLinks.randomSlug}`
            : `${navButtonLinks.randomSlug}`
        }
      >
        <FontAwesomeIcon
          className={`icon-button shuffle ${
            isHome || !navButtonLinks.nextSlug ? "no-arrow-right" : ""
          }`}
          icon={["fas", "redo-alt"]}
          title="Go to Random Topic"
        />
      </a>
      {!isHome && (
        <a href={navButtonLinks.nextSlug ? `${navButtonLinks.nextSlug}` : ""}>
          <FontAwesomeIcon
            className={`icon-button arrow-right ${
              navButtonLinks.nextSlug ? "" : "none"
            }`}
            icon={["fas", "chevron-right"]}
            title="Go to Next Topic"
          />
        </a>
      )}
      {/* <MdKeyboardArrowRight
        size={50}
        className={`arrow-right ${topic.next === -1 ? "none" : ""}`}
        onClick={() => handleNext()}
      /> */}
    </div>
  );
}
