import "../Css/Practice.css";
import * as React from 'react';

function Practice() {
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1>Practice page</h1>
                    <h4>Todo List</h4>
                </div>
                <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    );
}

export default Practice;