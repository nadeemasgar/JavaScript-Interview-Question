import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>All Links</h1>
      <ul>
        <li>
          <Link to="/CounterAppIssue">CounterAppIssue when increment by 3</Link>
        </li>
        <li>
          <Link to="/CorretUsage">Correction when increment by 3</Link>
        </li>
        <li>
          <Link to="/objectUpdate">Object update in State</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
