import React from "react";

function Shopping() {
  const customerW = {
    name: "Luana",
    age: 27,
    shopping: [
      { item: "Notebook", price: "R$ 2500" },
      { item: "Geledeira", price: "R$ 3000" },
      { item: "Smarphone", price: "R$ 1500" },
    ],
    active: true,
  };

  const customerM = {
    name: "Mario",
    age: 31,
    shopping: [
      { item: "Notebook", price: "R$ 2500" },
      { item: "Geledeira", price: "R$ 3000" },
      { item: "Smarphone", price: "R$ 1500" },
      { item: "Guitarra", price: "R$ 3500" },
    ],

    active: false,
  };

  const data = customerW;
  // const data = customerM;

  const total = data.shopping
    .map((item) => Number(item.price.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>
        Status:{" "}
        <span style={{ color: data.active ? "green" : "red" }}>
          {" "}
          {data.active ? "Active" : "Inactive"}
        </span>
      </p>
      <p>Total Spended: R$ {total}</p>
      <span style={{ color: "red" }}>
        {total > 10000 && <p>"You are spending a lot of money!"</p>}
      </span>
    </>
  );
}
export default Shopping;
