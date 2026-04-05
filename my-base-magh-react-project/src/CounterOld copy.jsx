import Button from "./Button";

function Counter() {
  let countValue = 111;

  function increment() {
    console.log("increment");
    // countValue++
    // countValue = countValue + 1;
    countValue += 1;
    console.log({ countValue });
  }

  function decrement() {
    console.log("decrement");
    countValue -= 1;
    console.log({ countValue });
  }

  console.log("render");
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

export default Counter;
