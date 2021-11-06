export default function Footer({ citations, slideNum }) {
  console.log("citations", citations);
  const relevantCitations = citations.filter((citation) =>
    citation.slideNum.includes(slideNum)
  );
  console.log("relevant citations", relevantCitations);
  return (
    <div className="footer-container">
      {relevantCitations.map((ele, idx) => {
        return (
          <a
            key={ele.id}
            href={ele.link}
            className="citation"
            target="_blank"
            rel="noreferrer"
          >
            {`${idx + 1}. ${ele.label}`}
          </a>
        );
      })}
    </div>
  );
}
