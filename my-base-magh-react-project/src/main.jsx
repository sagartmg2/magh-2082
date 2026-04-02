import { createRoot } from "react-dom/client";
import "./index.css";

const title = "welcome to REACT";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur magnam ipsum corporis modi a aperiam cumque exercitationem voluptatibus deleniti, omnis velit sequi. At dignissimos architecto dolorum illum. Quo, tempora";

let shortDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,";

// const todos = ["html", "css", "js", "ts", "react", "node", "express"];

const todos = [
  { name: "html", status: false },
  { name: "css", status: true },
  { name: "js", status: false },
  { name: "ts", status: true },
  { name: "react", status: false },
  { name: "node", status: true },
  { name: "express", status: false },
];

import Button from "./Button";

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

// function Button(props) {
//   return (
//     <button className="hover:bg-amber-500 capitalize mt-4 px-6 py-2 border border-gray-300 bg-amber-700 text-white ">
//       {props.label}
//     </button>
//   );
// }

// Functional Component
function CourseItem(props) {
  console.log("props is ", props);
  return (
    <li className="relative border border-gray-400 hover:shadow hover:shadow-amber-400">
      <img
        src="https://placehold.co/200x200"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <p className="text-2xl  capitalize mt-4 font-medium">{props.title}</p>
        <p className="text-xl mt-4 font-medium">US ${props.price}</p>
        <p className="text-xl mt-4 font-medium">{props.duration}</p>
        <Button label="learn more" />
      </div>
    </li>
  );
}

createRoot(document.getElementById("root")).render(
  <div className="p-8">
    <h1 style={{ textTransform: "uppercase" }} className="text-2xl font-bold">
      {title}
    </h1>
    <p>{description}</p>
    <p>{shortDescription}</p>
    <br />
    <hr />
    <h2 className="uppercase text-2xl my-5">Todos ( {todos.length} )</h2>
    <ul className="hidden">
      {todos.map((el) => (
        <li key={el}>{el.name}</li>
      ))}
    </ul>

    <table className="">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((el) => {
          return (
            <tr className="bg-green-400] bg-red-400]">
              <td>{el.name}</td>
              <td>{el.status} completed / incompleted</td>
              <td>
                <Button label="edit" />
                <Button label="delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

     <h2 className="uppercase text-2xl my-5">Incomplete Todos ( {todos.length} )</h2>
    <ul className="hidden">
      {todos.map((el) => (
        <li key={el}>{el.name}</li>
      ))}
    </ul>

    <table className="">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((el) => {
          return (
            <tr className="bg-green-400] bg-red-400]">
              <td>{el.name}</td>
              <td>{el.status} completed / incompleted</td>
              <td>
                <Button label="edit" />
                <Button label="delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>


     <h2 className="uppercase text-2xl my-5">Completed Todos ( {todos.length} )</h2>
    <ul className="hidden">
      {todos.map((el) => (
        <li key={el}>{el.name}</li>
      ))}
    </ul>

    <table className="">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((el) => {
          return (
            <tr className="bg-green-400] bg-red-400]">
              <td>{el.name}</td>
              <td>{el.status} completed / incompleted</td>
              <td>
                <Button label="edit" />
                <Button label="delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>


    
    <div className="todo">1. print correct status </div>
    <div className="todo">2. depending upon status, change row bg -color</div>

    <h2 className="uppercase text-3xl mt-10 ">
      Shopping List ( {shoppingItems.length} )
    </h2>
    <ul className="pl-10 list-disc">
      <li> keyboard ( 10 )</li>
      <li> mounse ( 5 )</li>
      <li> desktop ( 5 )</li>
    </ul>
    <br />
    <br />

    <ul className="pl-10 list-disc">
      {shoppingItems.map((el) => (
        <li key={el.item}>
          {el.item} ( {el.quantity} )
        </li>
      ))}
    </ul>
    <br />
    <br />

    <table className="">
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
        <tr>
          <td>Keyboard</td>
          <td>10</td>
        </tr>
        <tr>
          <td>mouse</td>
          <td>5</td>
        </tr>
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
    <br />
    <br />

    <table className="">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {shoppingItems.map((item) => {
          return (
            <tr>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>
                <button className=" hover:bg-amber-500 mt-4 px-6 py-2 border border-gray-300 bg-amber-700 text-white ">
                  static edit
                </button>
                <button className=" hover:bg-amber-500 mt-4 px-6 py-2 border border-gray-300 bg-amber-700 text-white ">
                  static delete
                </button>

                <Button label="edit" />
                <Button label="delete" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <br />
    <br />
    <br />

    <h2 className="uppercase text-2xl md:text-3xl lg:text-4xl mb-10">
      Featured Course List ( {courses.filter((el) => el.featured).length} )
    </h2>
    {/* <ul className="track flex flex-wrap justify-center gap-4"> */}
    <ul className="featured-courses grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
      {courses.map((el) => {
        if (el.featured) {
          return (
            <CourseItem
              title={el.title}
              price={el.price}
              duration={el.duration}
            />
          );
        }
      })}

      {courses.map((el) => {
        if (el.featured) {
          return (
            <li className="border border-gray-400 hover:shadow hover:shadow-amber-400 hidden ">
              <img
                src="https://placehold.co/200x200"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <p className="text-3xl mt-4 font-medium">{el.title}</p>
                <p className="text-xl mt-4 font-medium">${el.price}</p>
                <p className="mt-4">{el.duration}</p>
                <p className="mt-4">{el.level}</p>
                <Button label="learn more" />
              </div>
            </li>
          );
        }
      })}
    </ul>
    <br />
    <br />
    <br />
    <hr />
    <h2 className="uppercase text-3xl my-10" id="all-courses">
      All Course List ( {courses.length} )
    </h2>
    <ul className="featured-courses grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
      {courses.map((el) => {
        return (
          <CourseItem
            title={el.title}
            price={el.price}
            duration={el.duration}
          />
        );
      })}

      {courses.map((el) => {
        return (
          <li className="relative border border-gray-400 hover:shadow hover:shadow-amber-400 hidden">
            {/* {el.featured ? (
              <span className="absolute right-4 top-4 inline-block rounded-3xl px-4 py-2 border border-amber-800 ">
                featured
              </span>
            ) : null} */}
            {el.featured && (
              <span className="absolute right-4 top-4 inline-block rounded-3xl px-4 py-2 border border-amber-800 ">
                featured
              </span>
            )}

            <img
              src="https://placehold.co/200x200"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <p id="title" style={{}} className="text-3xl mt-4 font-medium">
                {el.title}
              </p>
              <p className="text-xl mt-4 font-medium">${el.price}</p>
              <p className="mt-4">{el.duration}</p>
              <p className="mt-4">{el.level}</p>
              <button className=" mt-4 px-6 py-2 border border-gray-300 bg-amber-700 text-white ">
                Learn More
              </button>
            </div>
          </li>
        );
      })}
    </ul>

    {/* CourseItem( "mern", 100 ) */}
    {/* CourseItem( "QA", 50 ) */}

    <br />
    <br />
    <br />

    <ul className="grid grid-cols-5 gap-4">
      <CourseItem title="mern" price="100" duration="3 months" />
      <CourseItem title="QA" price="50" duration="2 months" />
      <CourseItem title="pyhton" price="50" duration="2 months" />
      <CourseItem title="data-science" price="50" duration="2 months" />
      <CourseItem title="laravel" price="50" duration="2 months" />
    </ul>
  </div>,
);
