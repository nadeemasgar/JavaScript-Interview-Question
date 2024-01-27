import "./App.css";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="App">
        <button onClick={() => setShow(true)}>
          {show ? "hide" : "show"} modal
        </button>
        <Modal show={show} title="Modal" onClose={() => setShow(false)}>
          <h1>This is the Modal</h1>
        </Modal>
      </div>
    </>
  );
}

export default App;

/*----------------------------------------------------------------
1. Create a Modal component that will accept show state, title
2. Create a state show 
3. ALso add a functionality of closing Modal on clicking anywhere in the screen
-> This will be done using a div above a modal whose z-index will be less than the modal
*/
