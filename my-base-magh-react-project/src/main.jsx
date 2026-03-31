import { createRoot } from "react-dom/client";
import "./index.css";

const title = "welcome to REACT";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur magnam ipsum corporis modi a aperiam cumque exercitationem voluptatibus deleniti, omnis velit sequi. At dignissimos architecto dolorum illum. Quo, tempora";

let shortDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,";

const todos = ["html", "css", "js", "ts", "react", "node", "express"];
const todosList = todos.map((el) => <li>{el}</li>);

const shoppingItems = [
  {
    id: 1,
    item: "Keyboard",
    quantity: 10,
    price: 2500,
  },
  {
    id: 2,
    item: "Mouse",
    quantity: 15,
    price: 1200,
  },
  {
    id: 3,
    item: "Monitor",
    quantity: 5,
    price: 18000,
  },
  {
    item: "USB Cable",
    quantity: 25,
    price: 300,
  },
  {
    item: "Laptop Stand",
    quantity: 8,
    price: 2200,
  },
];

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "John Doe",
    duration: "12 weeks",
    price: 299,
    level: "Beginner",
    featured: true,
  },
  {
    id: 2,
    title: "React & TypeScript Mastery",
    instructor: "Jane Smith",
    duration: "8 weeks",
    price: 199,
    level: "Intermediate",
    featured: false,
  },
  {
    id: 3,
    title: "Laravel API Development",
    instructor: "Michael Johnson",
    duration: "6 weeks",
    price: 149,
    level: "Intermediate",
    featured: true,
  },
  {
    id: 4,
    title: "Docker & DevOps Essentials",
    instructor: "Emily Davis",
    duration: "4 weeks",
    price: 99,
    level: "Advanced",
    featured: false,
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Wilson",
    duration: "10 weeks",
    price: 179,
    level: "Beginner",
    featured: true,
  },
  {
    id: 6,
    title: "Node.js Backend Development",
    instructor: "David Brown",
    duration: "7 weeks",
    price: 159,
    level: "Intermediate",
    featured: false,
  },
  {
    id: 7,
    title: "Next.js Production Apps",
    instructor: "Sophia Taylor",
    duration: "9 weeks",
    price: 249,
    level: "Advanced",
    featured: true,
  },
  {
    id: 8,
    title: "Database Design with PostgreSQL",
    instructor: "Daniel Martinez",
    duration: "5 weeks",
    price: 129,
    level: "Intermediate",
    featured: false,
  },
  {
    id: 9,
    title: "Tailwind CSS from Scratch",
    instructor: "Olivia Anderson",
    duration: "3 weeks",
    price: 89,
    level: "Beginner",
    featured: true,
  },
  {
    id: 10,
    title: "System Design for Developers",
    instructor: "James Thomas",
    duration: "11 weeks",
    price: 349,
    level: "Advanced",
    featured: false,
  },
];

createRoot(document.getElementById("root")).render(
  <div className="p-8">
    <h1 style={{ textTransform: "uppercase" }} className="text-2xl font-bold">
      {title}
    </h1>
    <p>{description}</p>
    <p>{shortDescription}</p>
    <br />
    <hr />
    <h2 className="uppercase">Todos ( {todos.length} )</h2>
    <ul className="pl-10 list-disc">
      <li>html</li>
      <li>css</li>
      <li>js</li>
    </ul>
    {/* <ul>{todosList}</ul> */}
    <ul>
      {todos.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>

    <h2 className="uppercase">Shopping List ( {shoppingItems.length} )</h2>
    <ul>
      <li> keyboard ( 10 )</li>
      <li> mounse ( 5 )</li>
      <li> desktop ( 5 )</li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Keyboard</td>
          <td>10</td>
        </tr>
        <tr>
          <td>mouse</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>

    <ul>
      {shoppingItems.map((el) => (
        <li key={el.item}>
          {el.item} ( {el.quantity} )
        </li>
      ))}
    </ul>
    <div className="todo">
      convert the shooping list in tabular form while using map
    </div>

    <h2 className="uppercase">Featured Course List ( {courses.length} )</h2>
    <ul className="">
      <li>
        <img src="https://placehold.co/200x200" />
        <p>Mern Stack</p>
        <p>3 months</p>
        <p>Learn More</p>
      </li>
      <li>
        <img src="https://placehold.co/200x200" />
        <p>Mern Stack</p>
        <p>3 months</p>
        <p>Learn More</p>
      </li>
      <li>
        <img src="https://placehold.co/200x200" />
        <p>Mern Stack</p>
        <p>3 months</p>
        <p>Learn More</p>
      </li>
    </ul>
    <div className="todo">show only featured courses above</div>
    <hr />
    <h2 className="uppercase">All Course List ( {courses.length} )</h2>
    <ul>
      <li>
        <img src="https://placehold.co/200x200" />
        <p>Mern Stack</p>
        <p>3 months</p>
        <p>Learn More</p>
      </li>
    </ul>
    <div className="todo">
      in all courses, if featured, show a featured badge
    </div>

    <div className="todo">NOTE: DONOT repeate yourself : DRY principle</div>
  </div>,
);
