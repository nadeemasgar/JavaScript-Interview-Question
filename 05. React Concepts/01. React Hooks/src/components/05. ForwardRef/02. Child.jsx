import React, { forwardRef } from "react";

function Child(props, ref) {
  return <input type="text" ref={ref} />;
}

export default forwardRef(Child);
