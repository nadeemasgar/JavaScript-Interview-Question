import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h2>All Hooks</h2>
      <ul>
        <h2>1. useState</h2>
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
      <ul>
        <h2>2. useCallback</h2>
        <li>
          <Link to="/usecallback1">useCallback Example</Link>
        </li>
      </ul>
      <ul>
        <h2>3. useMemo</h2>
        <li>
          <Link to="/useMemo1">useMemo Example</Link>
        </li>
      </ul>
      <ul>
        <h2>3. useRef</h2>
        <li>
          <Link to="/useRef1">useRef Example</Link>
        </li>
        <li>
          <Link to="/doNotUseAsState">
            Do Not Use As State Example <br />
            Ref can be preferable used to store previous state
          </Link>
        </li>
      </ul>
      <ul>
        <h2>3. ForwardRef</h2>
        <li>
          <Link to="/forwaredRef">ForwardRef Example</Link>
        </li>
      </ul>
      <h2>Application</h2>
      <ol>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ol>
    </div>
  );
}

export default App;
