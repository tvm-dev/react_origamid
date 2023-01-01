import React from "react";
import Product from "../Product";
import Title from "../Title";

const Products = () => {
  const products = [
    { name: "Notebook", features: ["16GB ram", "512GB ssd"] },
    { name: "Smartphone", features: ["2GB ram", "128GB ssd"] },
  ];

  return (
    <section>
      <Title textTitle="Products" />
      {products.map((product) => (
        <Product key={product.name} {...product} />
      ))}
    </section>
  );
};

export default Products;
