import React, { useEffect, useReducer, useState, useCallback, useMemo } from "react";
import "./Todo.css";
import TodoCreate from "./Todo-create";
import TodoFilter from "./Todo-filter";
import TodoItem from "./Todo-item";
import { taskList } from "./taskList";
import toDoReducer from "../../reducers/todoReducer";

const TodoList = () => {
  const [tasks, dispatch] = useReducer(toDoReducer, []);
  const [currentFilter, setCurrentFilter] = useState('All tasks');

  useEffect(() => { 
    const storedTasks = localStorage.getItem('tasks');
    dispatch({
      type: 'SET_TASKS',
      payload: { tasks: storedTasks ? JSON.parse(storedTasks) : taskList }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((title) => { 
    dispatch({
      type: 'ADD_TASK',
      payload: { title }
    });
  }, []);

  const deleteTask = useCallback((id) => { 
    dispatch({
      type: 'DELETE_TASK',
      payload: { id }
    });
  }, []);

  const toggleComplete = useCallback((id) => { 
    dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id }
    });
  }, []);

  const updateTask = useCallback((id, newTitle) => { 
    dispatch({
      type: 'UPDATE_TASK',
      payload: { id, newTitle }
    });
  }, []);

  const filterMap = useMemo(() => ({
    'All tasks': () => true,
    Done: task => task.completed,
    ToDo: task => !task.completed
  }), []);

  const filteredTasks = useMemo(() => tasks.filter(filterMap[currentFilter]), [tasks, currentFilter, filterMap]);

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoCreate addTask={addTask} />
      <div>
        <TodoFilter
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
          filterMap={filterMap}
        />
        <div className="task-list">
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              updateTask={updateTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoList);
