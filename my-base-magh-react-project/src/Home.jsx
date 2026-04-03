import Button, { SmallButton, RoundedButton } from "./Button";
import todos from "./data/todos";
import { shoppingItems, courses } from "./data/info";
import { CourseItem } from "./CourseItem";

const title = "welcome to REACT";
const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur magnam ipsum corporis modi a aperiam cumque exercitationem voluptatibus deleniti, omnis velit sequi. At dignissimos architecto dolorum illum. Quo, tempora";

let shortDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,";

// function Button(props) {
//   return (
//     <button className="hover:bg-amber-500 capitalize mt-4 px-6 py-2 border border-gray-300 bg-amber-700 text-white ">
//       {props.label}
//     </button>
//   );
// }

// Functional Component
// function CourseItem(props) {
//   console.log("props is ", props);
//   return (
//     <li className="relative border border-gray-400 hover:shadow hover:shadow-amber-400">
//       <img
//         src="https://placehold.co/200x200"
//         className="w-full aspect-video object-cover"
//       />
//       <div className="p-4 flex flex-col items-center">
//         <p className="text-2xl  capitalize mt-4 font-medium">{props.title}</p>
//         <p className="text-xl mt-4 font-medium">US ${props.price}</p>
//         <p className="text-xl mt-4 font-medium">{props.duration}</p>
//         <Button label="learn more" />
//       </div>
//     </li>
//   );
// }

export default function Home() {
  const incompleteTodos = todos.filter((el) => {
    return !el.status;
  });

  function getStatusClass(status) {
    return `px-3 py-1 inline-block rounded-4xl text-white ${status ? "bg-green-700" : "bg-red-700"}`;
  }
  return (
    <div className="p-8">
      <h1 style={{ textTransform: "uppercase" }} className="text-2xl font-bold">
        {title}
      </h1>
      <p>{description}</p>
      <p>{shortDescription}</p>
      <br />
      <hr />
      <h2 className="uppercase text-2xl my-5">All Todos ( {todos.length} )</h2>
      <ul className="hidden">
        {todos.map((el) => (
          <li key={el.name}>{el.name}</li>
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
              <tr>
                <td>{el.name}</td>
                <td className="">
                  <span className={getStatusClass(el.status)}>
                    {el.status ? "completed" : "incompleted"}
                  </span>
                </td>
                <td>
                  <Button label="edit" />
                  <Button label="delete" />
                  <SmallButton label="edit"/>
                  <SmallButton label="delete"/>
                  <RoundedButton label="delete"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 className="uppercase text-2xl my-5">
        {/* Incomplete Todos ( {todos.filter(el =>!el.status).length} ) */}
        Incomplete Todos ( {incompleteTodos.length} )
      </h2>
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
          {/* {todos.filter(el =>{
          return !el.status
        }).map((el) => { */}
          {incompleteTodos.map((el) => {
            return (
              <tr className="bg-green-400] bg-red-400]">
                <td>{el.name}</td>
                <td>
                  <span className={getStatusClass(el.status)}>incompleted</span>
                </td>
                <td>
                  <Button label="edit" />
                  <Button label="delete" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 className="uppercase text-2xl my-5">
        Completed Todos ( {todos.length} )
      </h2>
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
          {todos
            .filter((el) => {
              return el.status;
            })
            .map((el) => {
              return (
                <tr className="bg-green-400] bg-red-400]">
                  <td>{el.name}</td>
                  <td>
                    <span className={getStatusClass(el.status)}>
                      completed
                    </span>{" "}
                  </td>
                  <td>
                    <Button label="edit" />
                    <Button label="delete" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

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
    </div>
  );
}
