export default function useOnScreen(options) {
  const [refTopic, setRefTopic] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (refTopic) {
      observer.observe(refTopic);
    }

    return () => {
      if (refTopic) {
        observer.unobserve(refTopic);
      }
    };
  }, [refTopic, options, visible]);

  return [setRefTopic, visible];
}
