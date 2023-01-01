import React from "react";

const Product = ({ name, features }) => {
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      <p>{name}</p>
      <ul>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
