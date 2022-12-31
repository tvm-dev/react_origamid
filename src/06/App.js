import React from "react";

const Title = ({ color, text, year }) => {
  return (
    <h1 style={{ color: color }}>
      {text}, at {year}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Title color="red" text="My title 01" year="2000" />
      <Title color="blue" text="My title 02" year="1984" />
      <Title color="tomato" text="My title 03" year="2022" />
    </div>
  );
};

export default App;
