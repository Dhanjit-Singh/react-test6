import React, { useState, useEffect } from "react";
import "../Css/Todos.css";
import todoImg from "../assets/images/todo.svg";
import { FaPlus } from "react-icons/fa6";



// get the localStorage data back
// const getLocalData = () => {
//     const lists = localStorage.getItem("mytodolist");

//     if (lists) {
//         return JSON.parse(lists);
//     } else {
//         return [];
//     }
// };

function Todos() {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    // add the items fucnction
    const addItem = () => {
        if (!inputdata) {
            alert("plz fill the data");
        } else if (inputdata) {
            setItems(
                [...items, { name: inputdata }]
            );
            // setInputData("");

            //     setInputData("");
            //     setIsEditItem(null);
            //     setToggleButton(false);
            // } else {
            //     const myNewInputData = {
            //         id: new Date().getTime().toString(),
            //         name: inputdata,
            //     };
            //     setItems([...items, myNewInputData]);
            //     setInputData("");
        }
    };
    console.log('inputdata=====>>>', inputdata);
    console.log('item=====>>>', items);

    //edit the items
    // const editItem = (index) => {
    //     const item_todo_edited = items.find((curElem) => {
    //         return curElem.id === index;
    //     });
    //     setInputData(item_todo_edited.name);
    //     setIsEditItem(index);
    //     setToggleButton(true);
    // };

    // how to delete items section
    // const deleteItem = (index) => {
    //     const updatedItems = items.filter((curElem) => {
    //         return curElem.id !== index;
    //     });
    //     setItems(updatedItems);
    // };

    // remove all the elements
    // const removeAll = () => {
    //     setItems([]);
    // };

    // adding localStorage
    // useEffect(() => {
    //     localStorage.setItem("mytodolist", JSON.stringify(items));
    // }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todoImg} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍ Add Item"
                            className="form-control"
                            value={inputdata}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <FaPlus className="add-btn" onClick={addItem} />
                    </div>
                    {/* show our items  */}
                    <div className="showItems">
                        {items.map((item, index) => (
                            <div className="eachItem" key={index}>
                                <h3>{item.name}</h3>
                                <div className="todo-btn">

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* rmeove all button  */}
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All">
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todos;