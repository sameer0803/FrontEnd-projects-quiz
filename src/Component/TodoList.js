import React, { useState } from "react";
import QuizCSS from "./ToDoList.css";

export default function TodoList() {
  const [activity, setActivity] = useState("");
  function addActivity() {
    setListData((ListData) => {
      const updatedListData = [...ListData, activity];
      console.log(updatedListData);
      setActivity("");
      return updatedListData;
    });
  }
  const [listData, setListData] = useState([]);

  function removeActivity(index) {
    setListData((ListData) => {
      const updatedListData = ListData.filter((data, i) => i !== index);
      return updatedListData;
    });
  }

  return (
    <>
      <div className="container">
        <div className="header">To DO LIST</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>

        <p className="list-heading">Here is your List</p>
        {listData!= [] && listData.map((data, index) => {
          return (
            <>
            <p key={index} >
            <div className="list-item">{data} </div>
            <div className="btn-position" onClick={()=>removeActivity(index)}><button> Remove</button></div>
            
            </p>
            </>
          );

        })
        }
        {listData.length>=1 && <button onClick={() => setListData([])}>Reset</button>}
        
      </div>
    </>
  );
}
