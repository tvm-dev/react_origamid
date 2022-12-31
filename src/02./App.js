import React from "react";

const App = () => {
  const products = ["Notebook", "Tablet", "Smartphone", "Laptop", "Test"];

  const books = [
    { name: "Book DBG", year: 2000 },
    { name: "Book PHP", year: 1996 },
    { name: "Book TND", year: 1991 },
  ];

  return (
    <>
      {<h2>Products</h2>}
      <ol>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ol>

      {<h2>Books</h2>}

      <ol>
        {books
          // using map with filter by year:
          .filter(({ year }) => year >= 1994)
          .map(({ name, year }) => (
            <li key={name}>
              {name}, {year}
            </li>
          ))}
      </ol>
    </>
  );
};

export default App;
