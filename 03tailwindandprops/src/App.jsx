import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardfetch from './cardfetch'

function App() {

  return (
    <>
      <h1 className='bg-black text-white p-10 rounded-xl'>sir sujal vaghela..!!</h1>
      <Cardfetch username = 'About project' chnge = 'Get'/>
      <Cardfetch username = 'About mywork'/>
    </>
  )
}

export default App
