import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav({ title }) {
  return (
    <div className="nav-bar-container">
      <FontAwesomeIcon
        className="icon-button arrow-left"
        icon={["fas", "chevron-left"]}
      />
      {/* <MdKeyboardArrowLeft
        size={50}
        className={`arrow-left ${topic.previous === -1 ? "none" : ""}`}
        onClick={() => handlePrev()}
      /> */}
      <div className="logo-container">
        <Link href="/">
          <a className="logo" title="Every Second Home Page">
            Every Second
          </a>
        </Link>
        <FontAwesomeIcon className="divider" icon={["fas", "circle"]} />
        <div className="logo-tagline">{title}</div>
      </div>
      <FontAwesomeIcon
        className="icon-button shuffle"
        icon={["fas", "redo-alt"]}
        title="Go to Random Topic"
      />
      <FontAwesomeIcon
        className="icon-button arrow-right"
        icon={["fas", "chevron-right"]}
      />
      {/* <MdKeyboardArrowRight
        size={50}
        className={`arrow-right ${topic.next === -1 ? "none" : ""}`}
        onClick={() => handleNext()}
      /> */}
    </div>
  );
}
