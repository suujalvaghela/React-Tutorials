import { createContext, useContext } from "react";

export const TodoCcontext = createContext({
    Todos: [{id: 60 , Todo:"cuttiee nidhiee" , completed: false}],
    addTodo: (todo) => {},
    updateTodo: (id , todo) => {},
    deleteTodo: (id) => {},
    toggleComplete:(id) => {}
})

export const TodoProvider = TodoCcontext.Provider

export const useTodo = () => {
    return useContext(TodoCcontext)
}