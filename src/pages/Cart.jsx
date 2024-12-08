import React, { useState, useEffect } from "react";

function Cart() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const savedData = localStorage.getItem("products");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  function handleSave(e) {
    e.preventDefault();

    const newProduct = { name, price };
    const updatedData = [...data, newProduct];
    setData(updatedData);
    localStorage.setItem("products", JSON.stringify(updatedData));
    setName("");
    setPrice("");
  }

  return (
    <div className="mx-auto mt-5">
      <h1 className="text-center text-3xl">Add products</h1>
      <form className="w-[400px] mx-auto gap-3 mt-5">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-full border rounded-md p-[10px]"
          placeholder="Enter product name"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="w-full mt-5 border rounded-md p-[10px]"
          placeholder="Enter product price"
        />
        <button
          className="bg-blue-600 p-[10px] rounded-md text-white mb-5 w-full mt-5"
          onClick={handleSave}
        >
          ADD
        </button>
      </form>
      <div className="flex flex-row flex-wrap gap-5 mx-auto pl-[200px] pr-[200px]">
        {data.length > 0 &&
          data.map(function (el, index) {
            return (
              <div
                key={index}
                className="bg-base-100 p-3 w-96 shadow-xl cursor-pointer"
              >
                <h2>Name: {el.name}</h2>
                <h2>Price: {el.price}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;
