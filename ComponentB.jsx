import ComponentC from "./ComponentC.jsx";
function ComponentB() {
  return (
    <div className="border-2 border-sky-500 p-4">
      <h1 className="font-sans font-bold text-2xl  ">ComponentB</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
