import CounterOld from "./CounterOld";
import Counter from "./Counter";
import Home from "./Home";
import Theme from "./Theme";
import GoogleTabs from "./GoogleTabs";
import TodosApi from "./TodosApi";
import TodosCrud from "./TodosCrud";
import ProductsApi from "./ProductsApi";
import TodosCrudApi from "./TodosCrudApi";

function App() {
  return (
    <div className="p-8">
      {/* <TodosCrud /> */}
      <TodosCrudApi/>
      {/* <TodosApi /> */}
      {/* <ProductsApi/> */}
      {/* <GoogleTabs/> */}
      {/* <CounterOld/> */}
      {/* <Counter /> */}
      {/* <Theme /> */}
      {/* <Home /> */}
      {/* fetch api data */}
    </div>
  );
}

export default App;
