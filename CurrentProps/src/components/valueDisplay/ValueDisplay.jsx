import React, { useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const prevValueRef = useRef();

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);
  const prevValue = prevValueRef.current;

  return (
    <div>
      <p>
        Current value: <strong>{value}</strong>
      </p>
      <p>
        Previous value:
        <strong>{prevValue !== undefined ? prevValue : "---"}</strong>
      </p>
    </div>
  );
}

export default ValueDisplay;
