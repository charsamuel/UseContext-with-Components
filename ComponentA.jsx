import React, { useState,createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export  const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Brocode");
  return (
    <div className="border-2 border-sky-500 p-4">
      <h1 className="font-sans font-bold text-2xl ">ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
      <ComponentB user={user} />

      </UserContext.Provider>
     
    </div>
  );
}

export default ComponentA;
