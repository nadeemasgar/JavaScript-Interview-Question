import { useState, useEffect, useRef } from "react";
import "./App.css";

let idx = 0;

export default function App() {
  const [count, setCount] = useState(50);
  const [element, setElement] = useState([]);
  const loadRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const endOfPage =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight;

      if (endOfPage) {
        loadRef.current.classList.remove("display");
        setTimeout(() => {
          setCount(count + 10);
        }, 1000);
      }
    };
    window.addEventListener("scroll", onScroll);
    createElement();
    return () => window.removeEventListener("scroll", onScroll);
  }, [count]);

  const createElement = () => {
    const mainContent = [];
    while (idx < count) {
      mainContent.push(<div key={idx}>{idx + 1}</div>);
      idx++;
    }
    loadRef.current.classList.add("display");
    setElement((prev) => [...prev, ...mainContent]);
  };

  return (
    <div className="App">
      {element}
      <div className="display" ref={loadRef}>
        Loading...
      </div>
    </div>
  );
}
