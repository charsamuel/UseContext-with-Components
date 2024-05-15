import ComponentD from "./ComponentD.jsx";
import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="border-2 border-sky-500 p-4">
      <h1 className="font-sans font-bold text-2xl ">ComponentC</h1>
      <h2>{`Hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
