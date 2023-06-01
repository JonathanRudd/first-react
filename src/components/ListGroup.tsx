import { useState } from "react";

function ListGroup() {
  const items = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];

  // This is the hook
  const [selectedIndex, setSelectedIndex] = useState(-1)

  //event handler

  return (
    <>
      <h1>List</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => { setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
