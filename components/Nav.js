import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav({ content, topic, handlePrev, handleNext }) {
  return (
    <div className="nav-bar-container">
      <FontAwesomeIcon
        className="arrow arrow-left"
        icon={["fas", "chevron-left"]}
      />
      {/* <MdKeyboardArrowLeft
        size={50}
        className={`arrow-left ${topic.previous === -1 ? "none" : ""}`}
        onClick={() => handlePrev()}
      /> */}
      <div className="logo-container">
        <div className="logo">Every Second</div>
        <div className="divider">
          <FontAwesomeIcon icon={["fas", "circle"]} />
        </div>
        <div className="logo-tagline">poop mcsquad</div>
      </div>
      <FontAwesomeIcon
        className="arrow arrow-right"
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
