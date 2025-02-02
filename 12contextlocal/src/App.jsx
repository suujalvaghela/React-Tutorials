import React, { useEffect, useState } from 'react'
import "./App.css"
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import { TodoProvider } from './contexts/TodoContext'

function App() {

  const [Todos, setTodos] = useState([{id: 8 , Todo: "THALA" , completed: true}])
  // const [Todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev , { id: Date.now(), ...todo } ])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  
  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"))

    if (Todos && Todos.length > 0) {
      setTodos(Todos)
    }
  },
    [])
  
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  },
  [Todos])
  

  return (
    <TodoProvider value={{ Todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {Todos.map((todo) => (
              <div key={todo.id}
                className='w-full'><TodoItem todo={todo} /></div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App