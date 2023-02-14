import "./App.css";
import Product from "./product";
import { products } from "./products";

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <div className="pl">
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
