import "./Apps.css";
import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
function App() {
  const [inputList, setInputList] = useState("by apple");

  const [Items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    // console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvents}
          />
          <button onClick={listOfItem}>+</button>
          <ol>
            {Items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  text={itemval}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
