// import React from 'react'
// import ReactDom from 'react-dom'
import './App.css'
import UserContextProvider from './AllContext/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
