import React, { useState } from "react";
import "./App.css";

function FolderStructure({ jsonData }) {
  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    setShow(!show);
  };

  const render = (jsonData) => {
    return (
      <div className="folder">
        <div onClick={onClickHandler} className="parentDiv">
          {jsonData.name}
        </div>

        {jsonData.children.map((child) => {
          return (
            <div className="subfolder">
              {show ? <FolderStructure jsonData={child} /> : null}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>{jsonData.isFolder ? render(jsonData) : <div>{jsonData.name}</div>}</>
  );
}

export default FolderStructure;
