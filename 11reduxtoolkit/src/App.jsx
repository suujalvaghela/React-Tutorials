
import './App.css'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'

function App() {

  return (
    <div>
      <div>
        <AddTodo />
      </div>

      <div>
        <TodosList />
      </div>
    </div>
  )
}

export default App
