import "./App.css";

function App() {
  const debounce = (cb) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb.apply(context, args);
      }, 300);
    };
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const optimisedFunction = debounce(handleChange);

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        placeholder="Enter something"
        className="searchBox"
        onChange={optimisedFunction}
      />
    </div>
  );
}

export default App;
