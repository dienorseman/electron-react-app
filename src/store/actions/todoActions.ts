export const  addTodo = (todo: any) => {
    return {
        type: "ADD_TODO",
        payload: todo,
    };
}

export const  toggleTodo = (todo: any) => {
    return {
        type: "TOGGLE_TODO",
        payload: todo,
    };
}

export const  removeTodo = (todo: any) => {
    return {
        type: "REMOVE_TODO",
        payload: todo,
    };
}

export const editTodo = (todo: any) => {
    return {
        type: "EDIT_TODO",
        payload: todo,
    };
}

export type TodosAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>
    | ReturnType<typeof editTodo>;
    