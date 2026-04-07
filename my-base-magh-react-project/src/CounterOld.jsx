/* 
  hook : function that have prefix use
    eg: useState, useEffect, useContext

    function useState(initialValue){
        ....
        ....
        const functionToChangeThatValue = () =>{
            .....
        }

      return [initialValue, functionToChangeThatValue]

    }
*/

import { useState } from "react";

function CounterOld() {
  // let countValue = 111;
  let [countValue, setCountValue] = useState(111);  // return [111, () =>{}]

  function increment() {
    console.log("increment");
    // countValue++
    // countValue = countValue + 1; // ERROR:  cannot change statem variable directly
    // countValue += 1; 
    let newValue = countValue + 1
    setCountValue(newValue)
    console.log({ countValue });
  }

  function decrement() {
    console.log("decrement");
    // countValue -= 1;
    setCountValue(countValue - 1)
    console.log({ countValue });
  }

  console.log("render | re-render  ");

  return (
    <div className="p-8">
      <h1 className="text-4xl">{countValue}</h1>

      <button
        onClick={increment}
        className="hover:bg-amber-500 capitalize  px-6 py-2 border border-gray-300 bg-amber-700 text-white "
      >
        increment
      </button>
      <button
        onClick={decrement}
        className="hover:bg-amber-500 capitalize  px-6 py-2 border border-gray-300 bg-amber-700 text-white "
      >
        decrement
      </button>

      {/* <Button label="increment"/> */}
    </div>
  );
}

export default CounterOld;
