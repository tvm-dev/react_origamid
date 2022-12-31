import React from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "R$ 2000",
    colors: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    name: "Notebook",
    price: "R$ 3000",
    colors: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    name: "Tablet",
    price: "R$ 1500",
    colors: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App = () => {
  const data = products.filter(
    ({ price }) => Number(price.replace("R$ ", "")) > 1500,
  );

  return (
    <section>
      {data.map(({ id, name, price, colors }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>Price: {price}</p>
          <ul>
            {colors.map((color) => (
              <li style={{ backgroundColor: color, color: "#fff" }} key={color}>
                {color}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default App;
