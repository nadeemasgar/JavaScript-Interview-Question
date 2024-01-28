import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <div className="App">
        <div className="search-bar-container">
          <SearchBar
            setResults={setResults}
            input={input}
            setInput={setInput}
          />
          <SearchResultsList results={results} setInput={setInput} />
        </div>
      </div>
    </>
  );
}

export default App;
