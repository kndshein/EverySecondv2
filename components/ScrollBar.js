export default function ScrollBar({ visible }) {
  return (
    <div className={`scroll-tag ${visible ? "disable" : ""}`}>
      <div className="text">Scroll</div>
      <div className="bar"></div>
    </div>
  );
}
