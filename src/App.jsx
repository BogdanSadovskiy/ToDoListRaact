import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="todo">Todo</Link>
        <Link to="example">Example</Link>
      </header>

      <Outlet />
    </>
  );
}

export default App;