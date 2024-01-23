import React, { useState } from "react";
import "./App.css";

function FolderStructure({ jsonData }) {
  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    setShow(!show);
  };

  const render = (jsonData) => {
    return jsonData.map((item) => {
      return (
        <div className="folder">
          <div onClick={onClickHandler} className="parentDiv">{item.name}</div>
          {show ? (
            <div className="subfolder">
              {item.isFolder ? (
                <FolderStructure jsonData={item.children} />
              ) : null}
            </div>
          ) : null}
        </div>
      );
    });
  };
  return <>{render(jsonData)}</>;
}

export default FolderStructure;
