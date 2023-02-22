import React, { useState } from "react";

export default function Crud() {
  const list = [
    {
      id: 1,
      name: "Apple",
      price: "999",
    },
    {
      id: 2,
      name: "Huawei",
      price: "599",
    },
    {
      id: 3,
      name: "Walton",
      price: "199",
    },
  ];

  const [lists, setLists] = useState(list);

  return (
    <div className="container">
      <AddList setLists={setLists} />
      <table>
        <tbody>
          {lists.map((current) => {
            return (
              <tr key={current.id}>
                <td>{current.name}</td>
                <td>{current.price}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const AddList = ({ setLists }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target.elements.name.value;
    let price = event.target.elements.price.value;
    const newList = { id: Math.random(), name, price };
    setLists((prevList) => {
      return prevList.concat(newList);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="text" name="price" placeholder="Enter price" />
      <button type="submit">Add</button>
    </form>
  );
};
