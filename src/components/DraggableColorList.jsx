import React from "react";

export default function DraggableColorList(props) {
  const { color } = props;
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-1/5 h-3/6 inline-block relative cursor-pointer m-0 -mb-3.5 hover:opacity-100 lg:w-1/5 lg:h-1/5 md:w-1/5 md:h-1/5 sm:w-full sm:h-1/6"
    >
      {color}
    </div>
  );
}
