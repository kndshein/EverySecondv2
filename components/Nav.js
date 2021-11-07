import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav({ isHome, title, slug, slugs }) {
  const [navButtonLinks, setNavButtonLinks] = useState({});
  console.log(slug, slugs);

  if (!isHome) {
    useEffect(() => {
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
    }, [slug]);
  }

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
      <FontAwesomeIcon
        className={`icon-button shuffle ${isHome ? "isHome" : ""}`}
        icon={["fas", "redo-alt"]}
        title="Go to Random Topic"
      />
      {!isHome && (
        <FontAwesomeIcon
          className="icon-button arrow-right"
          icon={["fas", "chevron-right"]}
        />
      )}
      {/* <MdKeyboardArrowRight
        size={50}
        className={`arrow-right ${topic.next === -1 ? "none" : ""}`}
        onClick={() => handleNext()}
      /> */}
    </div>
  );
}
