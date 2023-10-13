import React, { useState } from "react";
const ToDo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItem] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listofItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };
  const deleteItem =()=>{};

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <section id="title">
            <h1>ToDo List App</h1>
          </section>
          <section id="inputBox">
            <input
              type="text"
              placeholder="Add a Item"
              name=""
              id="inputField"
              value={inputList}
              onChange={itemEvent}
            />
            <button type="button" onClick={listofItem} id="addBtn">
              +
            </button>
          </section>
          <br />
          <section id="listView">
            <ul>
              {/* <li>{inputList}</li> */}
              {items.map((itemval) => {
                return (
                  <>
                    <div className="todoList">
                      <button type="button" onClick={deleteItem} id="delBtn">
                        X
                      </button>
                      <li>{itemval}</li>
                    </div>
                  </>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
export default ToDo;
