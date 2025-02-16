import React, { useState, useEffect } from "react";
import "../Css/Todos.css";
import todoImg from "../assets/images/todo.svg";
import { FaPlus } from "react-icons/fa6";
import { IoTrashBinOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";


function Todos() {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("todoItems");
        return savedItems ? JSON.parse(savedItems) : []; // Ensuring an array is returned
    });
    const [editId, setEditId] = useState(null);
    // localStorage.removeItem("todoItems");

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(items));
    }, [items]);

    // add the items fucnction
    const addItem = () => {
        if (!inputdata) {
            alert("plz fill the data");
            return;
        } 
        
        const editData = items.find((curElem) => curElem.name.toLowerCase() === inputdata.toLowerCase());
        if(editData) {
            console.log("This item already exists!");
            setInputData("");
            return;
        }

        if (editId) {
            const updatedItems = items.map((item) =>
                item.id === editId ? { ...item, name: inputdata } : item
            );
            setItems(updatedItems);
            setEditId(null);
        } else {
            const newItem = { id: new Date().getTime(), name: inputdata };
            setItems([...items, newItem]);

        }
        setInputData("");
    };

    //edit the items
    const editItem = (id) => {
        const editAble = items.find((curElem) => curElem.id === id);
        if(editAble) {
            setInputData(editAble.name);
            setEditId(id);
        }
    };

    // how to delete items section
    const deleteItem = (id) => {
        const updatedItems = items.filter((curElem) => curElem.id !== id);
        setItems(updatedItems);
    };

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
                        <h4 style={{
                            color: "white",
                            fontSize: "24px",
                            padding: "0px",
                            margin: "5px"
                        }}>Your Todo List</h4>
                        {items.map((item, index) => (
                            <div className="eachItem" key={index}>
                                <h3>{item.name}</h3>
                                <div className="todo-btn">
                                    <FiEdit onClick={() => editItem(item.id)} />
                                    <IoTrashBinOutline onClick={() => deleteItem(item.id)} />
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