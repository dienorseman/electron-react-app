import { createStore, } from "redux";
import { todosReducer } from "./reducers/todoReducer";

export const store = createStore( todosReducer );