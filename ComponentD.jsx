import React, { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="border-2 border-sky-500 p-4">
      <h1 className="font-sans font-bold text-2xl ">ComponentD</h1>
      <h2>{`Bye `}</h2>
    </div>
  );
}

export default ComponentD;
