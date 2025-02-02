import { createContext, useContext } from "react";

export const TodoCcontext = createContext({
    Todos: [{id: 7 , Todo:"THALA" , completed: false}],
    addTodo: (todo) => {},
    updateTodo: (id , todo) => {},
    deleteTodo: (id) => {},
    toggleComplete:(id) => {}
})

export const TodoProvider = TodoCcontext.Provider

export const useTodo = () => {
    return useContext(TodoCcontext)
}