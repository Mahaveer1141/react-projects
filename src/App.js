import "./App.css";
import { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState();
  const [filteredProductsList, setFilteredProductsList] = useState(products);
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await fetch("https://fakestoreapi.com/products")
        ).json();
        setProducts(data);
        setFilteredProductsList(data);
      } catch (err) {
        alert("error in fetching api");
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredProductsList(filterProduct());
  }, [title]);

  function filterProduct() {
    if (products === undefined) return;
    const filtered = products.filter((product) =>
      title === ""
        ? true
        : String(product.title)
          .toLowerCase()
          .includes(title.toLowerCase().trim())
    );
    return filtered;
  }

  return (
    <div className="App">
      <h1>Products</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {products === undefined ? (
        <LoadingSpinner />
      ) : (
        <div className="product-list">
          <ProductList products={filteredProductsList} />
        </div>
      )}
    </div>
  );
}

export default App;
