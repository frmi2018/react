import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Acheter du lait" },
    { id: 2, todo: "Acheter du pain" },
    { id: 3, todo: "Acheter du fromage" },
  ]);

  const [warning, setWarning] = useState(false);

  const tab = todos.map((elem) => {
    return (
      <li className="list-group-item" key={elem.id}>
        {elem.todo}
      </li>
    );
  });

  const addNewTodo = (str) => {
    if (str !== "") {
      warning && setWarning(false);
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          todo: str,
        },
      ]);
    } else {
      setWarning(true);
    }
  };

  const warningMsg = warning && (
    <div className="alert alert-danger mt-4" role="alert">
      Indiquer un Todo
    </div>
  );

  return (
    <div>
      {warningMsg}
      <h1 className="text-center">{todos.length} To-do</h1>
      <ul className="list-group">{tab}</ul>
      <AddTodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default Todo;
