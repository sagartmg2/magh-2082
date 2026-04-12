import React from "react";

function TodosCount({ count }) {
  return (
    <>
      <span className="text-2xl">{count}</span>
    </>
  );
}

export default TodosCount;
