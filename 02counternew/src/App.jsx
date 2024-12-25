import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count , changeval] = useState(7);

  const increaseval = () => {
    if(count < 20){
      changeval(count = count+1);
    }
  }
  const decreaseval = () => {
    if(count > 0){
      changeval(count = count-1);
    }
    
  }

  return (
    <>
      <h1>hello, sir sujal vaghela</h1>
      <h2>counter : {count}</h2>

      <button onClick={increaseval}>Addcounter: {count}</button>
      <br /> <br/>
      <button onClick={decreaseval}>Removecounter: {count}</button>
    </>
  )
}

export default App
