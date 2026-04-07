import { useState } from "react";

export default function Theme() {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeToDarkMode = () => {
    console.log("dark mode ");
    setDarkTheme(true);
  };

  const changeToLightMode = () => {
    console.log("light mode ");
    setDarkTheme(false);
  };

  const changeTheme = (darkThemeStatus) =>{
    setDarkTheme()
  }



  return (
    <div className={` ${darkTheme && "bg-black text-white"} p-8`}>
      {/* <button
        onClick={changeToDarkMode}
        className={`border bg-white px-3 py-2 text-black rounded-xl mr-3 ${darkTheme ? "hidden" : ""} `}
      >
        dark theme
      </button>
      <button
        onClick={changeToLightMode}
        className={`border bg-white px-3 py-2 text-black rounded-xl ${!darkTheme ? "hidden" : ""}`}
      >
        light theme
      </button> */}

      {darkTheme ? (
        <button
          onClick={changeToLightMode}
          className="border bg-white px-3 py-2 text-black rounded-xl"
        >
          light theme
        </button>
      ) : (
        <button
          onClick={changeToDarkMode}
          className="border bg-white px-3 py-2 text-black rounded-xl mr-3"
        >
          dark theme
        </button>
      )}
   
      <p className="mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        inventore in voluptate nihis!
      </p>
      <br />
    </div>
  );
}
