import React, { useState, useEffect, useRef } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

const App = () => {
  const inputRef = useRef();
  const suggestionAreaRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [list, updateList] = useState([]);
  const [suggestionAreaVisible, setSuggestionAreaVisible] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    makeApiCall(value);
  };

  const makeApiCall = async (query) => {
    try {
      let resp = await getSuggestions(query);
      updateList(resp);
    } catch (e) {
      updateList([]);
      console.error("Error while getting suggestions list ", e);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setSuggestionAreaVisible(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  });

  return (
    <main className="App">
      <input
        type="seach"
        name="search"
        placeholder="search"
        ref={inputRef}
        id="search"
        onFocus={() => setSuggestionAreaVisible(true)}
        onChange={handleChange}
        value={searchQuery}
      />
      {suggestionAreaVisible && (
        <div id="suggestion-area" ref={suggestionAreaRef}>
          {list.map((e) => (
            <div onClick={() => setSearchQuery(e)}>{e}</div>
          ))}
        </div>
      )}
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
