import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoList from './components/todoList/Todo-list';
import Example from './components/Example';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: "todo",
        element: <TodoList />,
      },
      {
        path: "example",
        element: <Example />,
      }
    ],
  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

