import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCheck, faEdit } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const { todos } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const todoListRef = useRef<HTMLUListElement>(null);

  const [editedTodoId, setEditedTodoId] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: uuidv4(),
        desc: e.target.desc.value,
        completed: false,
      },
    });
    e.target.desc.value = "";
    if (todoListRef.current) {
      todoListRef.current.scrollTop = todoListRef.current.scrollHeight;
    }
  };

  const handleEditSubmit = (todo: any) => {
    return (e: any) => {
      e.preventDefault();
      setEditedTodoId("");
    };
  };

  const handleDelete = (todo: any) => {
    dispatch({ type: "REMOVE_TODO", payload: todo });
  };

  const handleComplete = (todo: any) => {
    if (editedTodoId) return;
    dispatch({
      type: "TOGGLE_TODO",
      payload: {
        id: todo.id,
        desc: todo.desc,
        completed: !todo.completed,
      },
    });
  };

  const handleEdit = (todo: any) => {
    if (todo.completed) return;
    setEditedTodoId(todo.id);
  };

  useEffect(() => {
    console.log(editedTodoId);
  }, [editedTodoId]);

  return (
    <>
      <div className="app-container">
        <h1>Redux Todo List</h1>
        <ul className="todo-list" ref={todoListRef}>
          {todos.map((todo: any) => (
            <div key={todo.id} className="todo-container">
              <form action="" onSubmit={handleEditSubmit(todo)}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleComplete(todo)}
                  disabled={editedTodoId !== ""}
                />
                <li className="todo-text">
                  {editedTodoId === todo.id ? (
                    <input
                      type="text"
                      value={todo.desc}
                      onChange={(e) =>
                        dispatch({
                          type: "EDIT_TODO",
                          payload: {
                            id: todo.id,
                            desc: e.target.value,
                            completed: todo.completed,
                          },
                        })
                      }
                    />
                  ) : (
                    todo.desc
                  )}
                </li>
              </form>

              <div className="btn-container">
                <button onClick={() => handleDelete(todo)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button onClick={() => handleComplete(todo)}>
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button onClick={() => handleEdit(todo)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
            </div>
          ))}
        </ul>
        <form className="add-todo-form" onSubmit={handleSubmit}>
          <input type="text" name="desc" placeholder="What do you need to do?" />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default App;
