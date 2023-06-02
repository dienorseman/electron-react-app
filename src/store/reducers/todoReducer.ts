import { Reducer } from "redux";

interface Todo {
  id: number;
  desc: string;
  completed: boolean;
  editign: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    // {
    //   id: 1,
    //   desc: "Learn React",
    //   completed: true,
    // },
    // {
    //   id: 2,
    //   desc: "Learn Redux",
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   desc: "Learn Redux-ToolKit",
    //   completed: false,
    // },
  ],
};

type TodosAction = {
  type: "ADD_TODO" | "TOGGLE_TODO" | "REMOVE_TODO" | "EDIT_TODO";
  payload: Todo;
};

export const todosReducer: Reducer<TodosState, TodosAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              desc: action.payload.desc,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
