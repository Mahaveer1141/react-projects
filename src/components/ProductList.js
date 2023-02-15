import Product from "./Product";

function ProductList({ products }) {
  return (
    <>
      {products.length === 0 ? (
        <div>No Products</div>
      ) : (
        <>
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ProductList;
