import { jsonData } from "./jsonData";
import FolderStructure from "./FolderStructure";

function App() {
  return (
    <div>
      <FolderStructure jsonData={jsonData} />
    </div>
  );
}

export default App;
