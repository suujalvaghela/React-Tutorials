import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(7);
  const [numbers, setnumbers] = useState(true);
  const [characters, setcharacters] = useState(true);
  const [Password, setpassword] = useState("");

  const passref = useRef(null);

  let passwordgenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numbers) { str += '0123456789'; }
    if (characters) { str += ')!@#$%^&*('; }

    for (let i = 1; i <= length; i++) {
      let charI = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charI);
      setpassword(pass);
    }

  }, [length, numbers, characters, setpassword])

  useEffect(() => { passwordgenerator() }, [length, numbers, characters, passwordgenerator])

  const passcopied = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(1,7);
    window.navigator.clipboard.writeText(Password);
  },[Password])

  return (
    <body>
      <div class="container">
        <h1 id='text'>Password Generator</h1>
        <div class="navbar">
          <input type="text" value={Password} readOnly placeholder='Password' id='input' ref={passref} />
          <button id='copy' onClick={passcopied}>copy</button>
        </div>
        <div class="changing">
          <div class="range1">
            <input type="range" value={length} min={3} max={18} id='range' class='newinput' onChange={(e) => setlength(e.target.value)} />
            <label>Length: {length}</label>
          </div>

          <div class="range1">
            <input type="checkbox" class='newinput' defaultChecked={numbers} onChange={() => { setnumbers((prev) => !prev) }} />
            <label>Numbers</label>
          </div>

          <div class="range1">
            <input type="checkbox" class='newinput' defaultChecked={characters} onChange={() => { setcharacters((prev) => !prev) }} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </body>
  )
}

export default App
