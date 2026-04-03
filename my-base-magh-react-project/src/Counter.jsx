import Button from "./Button";

function Counter(props) {
  return <div className="p-8">
    <h1 className="text-3xl">0</h1>

    <Button label="increment"/>
    <Button label="decrement"/>
  </div>;
}

export default Counter;
