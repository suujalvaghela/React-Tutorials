import { useState } from 'react'

function App() {

  let [color, setColor] = useState("blue");

  return (
    <div className='w-screen h-screen flex justify-center' style={{ backgroundColor: color }}>
      <div className='fixed bottom-10 flex justify-center py-2 px-4 bg-black rounded-2xl'>
        <div className=''>
          <button className='mx-3' onClick={() => { setColor("red") }}>Red</button>
          <button className='mx-3' onClick={() => { setColor("brown") }}>Brown</button>
          <button className='mx-3' onClick={() => { setColor("yellow") }}>Yellow</button>
          <button className='mx-3' onClick={() => { setColor("pink") }}>Pink</button>
          <button className='mx-3' onClick={() => { setColor("green") }}>Green</button>
          <button className='mx-3' onClick={() => { setColor("aqua") }}>Aqua</button>
          <button className='mx-3' onClick={() => { setColor("violet") }}>Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
