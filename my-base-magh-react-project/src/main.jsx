import { createRoot } from "react-dom/client";
import "./index.css";

const title = "welcome to REACT";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur magnam ipsum corporis modi a aperiam cumque exercitationem voluptatibus deleniti, omnis velit sequi. At dignissimos architecto dolorum illum. Quo, tempora";

const todos = ["html", "css", "js", "ts", "react"];

createRoot(document.getElementById("root")).render(
  <div>
    <h1 style={{ textTransform: "uppercase" }}>{title}</h1>
    <p>{description}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
      laboriosam!
    </p>
    <br />
    <hr />
    <h2 className="uppercase">Todos ( {todos.length} )</h2>
    <ul>
      <li>html</li>
      <li>css</li>
      <li className="todo">TODO: map with above todos variable</li>
    </ul>
  </div>,
);
