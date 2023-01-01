import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
  const { pathname } = window.location;
  let Page;

  if (pathname === "/products") {
    Page = Products;
  } else {
    Page = Home;
  }

  return (
    <section>
      <Header />
      <Page />
    </section>
  );
};

export default App;
