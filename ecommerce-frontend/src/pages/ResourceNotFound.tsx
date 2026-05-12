import React from "react";
import notFound from "../assets/not-found.png";

export default function ResourceNotFound() {
  return (
    <div>
      <img className="w-full" src={notFound} />
    </div>
  );
}
