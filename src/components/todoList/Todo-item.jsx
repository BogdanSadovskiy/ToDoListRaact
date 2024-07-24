import classNames from "classnames";
import React, { useState } from "react";

const TodoItem = ({ task, deleteTask, toggleComplete, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const saveClickHandler = () => { 
    if(title.trim().length < 3){
      return;
    }
    setIsEditing(false);
    updateTask(task.id, title);
  }


  const normalTemplate = (
    <>
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span className={classNames({ completed: task.completed })} onClick={()=>setIsEditing(true)}>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </>
  );

  const editTemplate = <>
    <input type="checkbox" disabled />
    <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
    <button onClick={saveClickHandler}>Save</button>
  </>;
  
  
  return <div className="task-item">{isEditing ? editTemplate : normalTemplate}</div>;
};

export default TodoItem;
